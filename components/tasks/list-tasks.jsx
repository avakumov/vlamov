import { Button } from 'antd'
import React, { useContext, useState } from 'react'
import { useDrop } from 'react-dnd'

import { ItemTypes } from '../../lib/items-draggable'
import { DispatchContext, StateContext } from '../../pages/tasks'
import { TASKS_APP } from '../../state-manager/constants'
import { NewTaskModal } from './new-task-modal'
import { Task } from './task'
//dragging task

//container drops tasks list
const ListTasks = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const [modal, setModal] = useState(false)
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => {
            dispatch({ type: TASKS_APP.MOVE_TASK, payload: { taskId: item.id, dayId: -1 } })
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    const handleClose = () => {
        setModal(false)
    }
    const addTask = (values) => {
        setModal(false)
        dispatch({ type: TASKS_APP.ADD_TASK, payload: values.task })
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
            {state.tasks
                .filter((t) => !t.day)
                .map((task) => (
                    <Task key={task.id} task={task} />
                ))}
        </div>
    )
}

export { ListTasks }
