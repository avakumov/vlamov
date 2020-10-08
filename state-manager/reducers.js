import moment from 'moment'

import { TASKS } from './constants'

function tasksReducer(draft, action) {
    switch (action.type) {
        case TASKS.MOVE_TASK: {
            const { dayId, taskId } = action.payload
            const indexTask = draft.tasks.findIndex((t) => t.id === taskId)
            if (dayId === -1) {
                draft.tasks[indexTask].day = ''
            } else {
                draft.tasks[indexTask].day = dayId
            }
            return
        }
        case TASKS.SELECTED_ROWS: {
            draft.selectedRows = action.payload
            return
        }
        case TASKS.ADD_TASK: {
            const {
                title,
                description,
                difficulty,
                importance,
                durationMins,
                color
            } = action.payload
            const newTask = {
                id: 22,
                title,
                description,
                difficulty,
                importance,
                day: '',
                durationMins,
                color
            }
            draft.tasks.push(newTask)
            return
        }
        case TASKS.ADD_TASK_TO_AWARD: {
            const { taskId, awardId } = action.payload
            const indexAward = draft.awards.findIndex((a) => a.id === awardId)
            if (draft.awards[indexAward].tasks.find((task) => task.id === taskId)) {
                return
            }
            const indexTask = draft.tasks.findIndex((t) => t.id === taskId)
            draft.awards[indexAward].tasks.push(draft.tasks[indexTask])
            return
        }
        case TASKS.ADD_DAY: {
            const lastDate = draft.days.reduce((acc, current) => {
                if (current.date > acc) return current.date
                return acc
            }, moment())
            draft.days.push({
                key: '100',
                id: '100',
                date: moment(lastDate).add(1, 'days'),
                tasks: [],
                dayType: 'Обычный'
            })
            return
        }
        default:
            return
    }
}

export const reducers = {
    tasks: tasksReducer
}
