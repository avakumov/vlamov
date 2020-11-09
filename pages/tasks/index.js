import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useImmerReducer } from 'use-immer'

import Layout from '../../components/layout'
import { Calendar } from '../../components/tasks/calendar'
import { Actions } from '../../components/tasks/list-actions'
import { ListAwards } from '../../components/tasks/list-awards'
import { ListTasks } from '../../components/tasks/list-tasks'
import { initState } from '../../state-manager/init-state'
import { reducers } from '../../state-manager/reducers'
export const StateContext = React.createContext()
export const DispatchContext = React.createContext()
import { actions } from '../../state-manager/actions'   
import { Button} from 'antd'


export default function Tasks() {
    const [state, dispatch] = useImmerReducer(reducers.tasks, initState.tasks)
    useEffect(() => {
        actions.getTasks()(dispatch)
    }, [])
    return (
        <Layout>
            <Head>
                <title>Tasks</title>
            </Head>{' '}
            <DndProvider backend={HTML5Backend}>
                <DispatchContext.Provider value={dispatch}>
                    <StateContext.Provider value={state}>
                        <ListAwards />
                        <Actions />
                        <div className="tasks-calendar__container">
                            <ListTasks />
                            <Calendar />
                        </div>
                    </StateContext.Provider>
                </DispatchContext.Provider>
            </DndProvider>
        </Layout>
    )
}

// export async function getServerSideProps() {
//     const tasks = await getTasks()
//     return {
//         props: {
//             tasks
//         }
//     }
// }
