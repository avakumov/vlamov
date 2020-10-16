import axios from 'axios'
import { useQuery } from 'react-query'

const getTasks = async () => {
    const { data } = await axios.get(`api/tasks`)
    return data
}

export function useTasks() {
    return useQuery('tasks', getTasks)
}
