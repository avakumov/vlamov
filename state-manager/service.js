import axios from 'axios'
const putTask = async (task) => {
    const response = await axios.put(`/api/tasks/${task._id}`, task)
}
const getTasks = () => {
    return axios.get('api/tasks')
}

export const service = {
    getTasks
}
