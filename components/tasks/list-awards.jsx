import React, { useContext } from 'react'

import { StateContext } from '../../pages/tasks'
import { Award } from './award'
const ListAwards = () => {
    const state = useContext(StateContext)

    return (
        <div className="list-awards__container">
            {state.awards.map((award) => (
                <Award key={award.id} award={award} />
            ))}
        </div>
    )
}

export { ListAwards }
