import Head from 'next/head'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Layout from '../../components/layout'
import { ListTasks } from '../../components/tasks'
import { getTasks } from '../../lib/tasks'

export default function Post({ tasks }) {
    return (
        <Layout>
            <Head>
                <title>Tasks</title>
            </Head>
            <DndProvider backend={HTML5Backend}>
                <ListTasks tasks={tasks} />
            </DndProvider>
        </Layout>
    )
}

export async function getServerSideProps() {
    const tasks = await getTasks()
    return {
        props: {
            tasks
        }
    }
}
