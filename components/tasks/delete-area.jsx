import { Button, Tooltip } from 'antd'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../lib/items-draggable'
import { action } from '../../lib/actions'
import { useMutation, useQueryCache } from 'react-query'

const DeleteArea = () => {
    const [mutateDeleteTask] = useMutation(action.deleteTask)
    const queryCash = useQueryCache()
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => {
            mutateDeleteTask(item.id)
            queryCash.invalidateQueries('tasks')
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <Tooltip title="Delete">
            <div
                ref={drop}
                className={
                    isOver
                        ? 'action__drop-container action__drop-container--isOver'
                        : 'action__drop-container'
                }>
                <Button>Delete</Button>
            </div>
        </Tooltip>
    )
}

export { DeleteArea }
