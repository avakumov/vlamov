import { FileDoneOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { ItemTypes } from '../../lib/items-draggable'
import { DispatchContext } from '../../pages/tasks'
import { TASKS_APP } from '../../state-manager/constants'

const Action = ({ action }) => {
    const dispatch = useContext(DispatchContext)

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => {
            dispatch({
                type: TASKS_APP.ADD_TASK_TO_AWARD,
                payload: { taskId: item.id, awardId: ''}
            })
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <Tooltip title={action.tooltip}>
            <div
                ref={drop}
                className={
                    isOver
                        ? 'action__drop-container action__drop-container--isOver'
                        : 'action__drop-container'
                }>
                <Button>{action.title}</Button>
            </div>
        </Tooltip>
    )
}

const actions = [
    {id: 1, title: 'Done', tooltip: 'Done', action: 'done'},
    {id: 2, title: 'Delete', tooltip: 'Delete', action: 'delete'}
]


const Actions = () => {
    return (
        <div className="actions__container">
            {actions.map((action) => (
                <Action key={action.id} action={action} />
            ))}
        </div>
    )
}

export { Actions }
