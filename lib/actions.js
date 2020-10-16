import axios from 'axios'
import { getSession } from 'next-auth/client'
const addTask = async (task) => {
    try {
        const session = await getSession()
        task.user = session.userId
        task.status = 'new'
        return axios.post('/api/tasks', task)
    } catch (error) {
        console.log(error)
        return { error }
    }
}

const deleteTask = async (id) => {
    axios.delete(`/api/tasks/${id}`)
}

export const action = {
    addTask,
    deleteTask
}
