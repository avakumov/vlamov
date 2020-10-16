import { Button, Table } from 'antd'
import moment from 'moment'
import React from 'react'
import { useDrop } from 'react-dnd'

import { ItemTypes } from '../../lib/items-draggable'
import { Task } from './task'
const daysColumns = [
    {
        title: 'Date',
        dataIndex: 'date'
    },
    {
        title: 'Tasks',
        dataIndex: 'tasks'
    },
    {
        title: 'Duration',
        dataIndex: 'duration'
    },
    {
        title: 'Avarage difficulty',
        dataIndex: 'avarageDifficulty'
    },
    {
        title: 'Avarage Importance',
        dataIndex: 'avarageImportance'
    }
]

//In table row special tasks container
const ContainerTasks = ({ tasks, dayId, dispatch }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => {
            //dispatch({ type: TASKS.MOVE_TASK, payload: { taskId: item.id, dayId: dayId } })
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })
    return (
        <div
            ref={drop}
            className={
                isOver
                    ? 'calendar__container_tasks calendar__container_tasks--isOver'
                    : 'calendar__container_tasks'
            }>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}

const Calendar = () => {
    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys) => {
            // dispatch({ type: TASKS.SELECTED_DAYS, payload: selectedRowKeys })
        },
        getCheckboxProps: (record) => ({
            disabled: record.disabled, // Column configuration not to be checked
            name: record.name
        })
    }

    //insert to days.tasks container with draggable tasks
    const preparedDataTasks = [].map((day) => {
        const copyDay = { ...day }
        copyDay.date = moment(day.date).format('DD.MM.YYYY')
        const filteredTasks = tasks.filter((t) => t.day === day.id)

        //tasks in day
        copyDay.tasks = (
            <ContainerTasks key={day.id} dayId={day.id} tasks={filteredTasks} dispatch={dispatch} />
        )
        //duration of tasks (summ)
        const summDurationMins = Number(
            filteredTasks.reduce((acc, current) => acc + current.durationMins, 0)
        )
        if (summDurationMins) {
            const hours = Math.floor(summDurationMins / 60)
            const mins = summDurationMins - hours * 60
            if (mins < 10) {
                copyDay.duration = `${hours}:0${mins}`
            } else {
                copyDay.duration = `${hours}:${mins}`
            }
        }

        //avarage diffculty of tasks
        const summOfDifficulty = filteredTasks.reduce((acc, current) => acc + current.difficulty, 0)
        if (filteredTasks.length) {
            copyDay.avarageDifficulty = (summOfDifficulty / filteredTasks.length).toFixed(1)
        }

        //avarage diffculty of tasks
        const summOfImportance = filteredTasks.reduce((acc, current) => acc + current.importance, 0)
        if (filteredTasks.length) {
            copyDay.avarageImportance = (summOfImportance / filteredTasks.length).toFixed(1)
        }

        return copyDay
    })

    const addDay = () => {
        //dispatch({ type: TASKS.ADD_DAY })
    }
    const AddDayButton = () => {
        return <Button onClick={addDay}>+</Button>
    }
    preparedDataTasks.push({
        key: '10000',
        id: '10000',
        date: <AddDayButton />,
        disabled: true
    })

    return (
        <div>
            <Table
                size="small"
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection
                }}
                columns={daysColumns}
                dataSource={preparedDataTasks}
            />
        </div>
    )
}

export { Calendar }
