import Head from 'next/head'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import Layout from '../../components/layout'
import { Calendar } from '../../components/tasks/calendar'
import { DropAreas } from '../../components/tasks/drop-areas'
import { ListAwards } from '../../components/tasks/list-awards'
import { ListTasks } from '../../components/tasks/list-tasks'

const queryCache = new QueryCache()

export default function Tasks() {
    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            <Layout>
                <Head>
                    <title>Tasks</title>
                </Head>{' '}
                <DndProvider backend={HTML5Backend}>
                    <ListAwards />
                    <DropAreas />
                    <div className="tasks-calendar__container">
                        <ListTasks />
                        <Calendar />
                    </div>
                </DndProvider>
            </Layout>
            <ReactQueryDevtools initialIsOpen />
        </ReactQueryCacheProvider>
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
