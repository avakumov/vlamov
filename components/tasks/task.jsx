import { Tooltip } from 'antd'
import React from 'react'
import { useDrag } from 'react-dnd'

import { ItemTypes } from '../../lib/items-draggable'

export const Task = ({ task }) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.TASK,
            id: task._id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return (
        <div
            ref={drag}
            className="list-tasks__task"
            style={{ width: `${task.durationMins}px`, backgroundColor: `${task.color}` }}>
            <Tooltip title={task.title} mouseEnterDelay="0.5">
                {task.title}
            </Tooltip>
        </div>
    )
}
