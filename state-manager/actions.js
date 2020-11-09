import { service } from './service'
import { TASKS_APP } from './constants'


function getTasks() {
    return (dispatch) => {
        dispatch(request())

        service.getTasks().then(
            (tasks) => dispatch(success(tasks)),
            (error) => dispatch(failure(error))
        )
    }

    function request() {
        return {}
    }

    function success(tasks) {
        return { type: TASKS_APP.GET_BOOKS_SUCCESS, payload: tasks.data.data }
    }
    function failure(error) {
        return {}
        // return { type: booksConstants.GETALL_BOOKS_FAILURE, error }
    }
}

export const actions = {
    getTasks
}