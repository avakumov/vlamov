import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { ItemTypes } from '../../lib/items-draggable'
import { DispatchContext } from '../../pages/tasks'
import { TASKS } from '../../state-manager/constants'

const Award = ({ award }) => {
    const dispatch = useContext(DispatchContext)

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => {
            dispatch({
                type: TASKS.ADD_TASK_TO_AWARD,
                payload: { taskId: item.id, awardId: award.id }
            })
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    const getCountTasksDone = () => {
        const count = award.tasks.reduce((res, task) => {
            if (task.status === 'done') {
                return res + 1
            }
            return res
        }, 0)
        return count
    }

    // const getPercentsDone = () => {
    //     if (award.tasks.length === 0) return
    //     return (getCountTasksDone() / award.tasks.length) * 100
    // }

    return (
        <div className="award__container">
            <div
                ref={drop}
                className={
                    isOver
                        ? 'award__drop-container award__drop-container--isOver'
                        : 'award__drop-container'
                }>
                <img className="award__image" src={award.image} alt={award.title} />
                <div className="award__percents">
                    {getCountTasksDone()}/{award.tasks.length}
                </div>
            </div>
        </div>
    )
}

export { Award }
