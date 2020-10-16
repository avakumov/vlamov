import { Button } from 'antd'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { useMutation, useQueryCache } from 'react-query'

import { useTasks } from '../../hooks/useTasks'
import { action } from '../../lib/actions'
import { ItemTypes } from '../../lib/items-draggable'
import { NewTaskModal } from './new-task-modal'
import { Task } from './task'

//dragging task

//container drops tasks list
const ListTasks = () => {
    const queryCache = useQueryCache()
    const { status, data, error, isFetching } = useTasks()
    const [mutateAddTask] = useMutation(action.addTask)

    const [modal, setModal] = useState(false)
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => {
            // dispatch({ type: TASKS.MOVE_TASK, payload: { taskId: item.id, dayId: -1 } })
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    const handleClose = () => {
        setModal(false)
    }
    const addTask = async (values) => {
        setModal(false)

        try {
            await mutateAddTask(values.task)
            queryCache.invalidateQueries('tasks')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            ref={drop}
            className={
                isOver
                    ? 'list-tasks__container list-tasks__container--isOver'
                    : 'list-tasks__container'
            }>
            <NewTaskModal visible={modal} handleClose={handleClose} addTask={addTask} />
            <Button type="primary" onClick={() => setModal(true)}>
                +
            </Button>
            {status === 'loading' ? (
                'Loading...'
            ) : status === 'error' ? (
                <span>Error: {error.message}</span>
            ) : (
                data.data.filter((t) => !t.day).map((task) => <Task key={task._id} task={task} />)
            )}
        </div>
    )
}

export { ListTasks }
