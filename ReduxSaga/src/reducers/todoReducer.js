const initialState = {
    taskList: [],
    showError: false
};

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TASK': {
            const newState = { ...state, showError: false }
            newState.taskList.push(action.payload)
            return newState
        }
        case 'REMOVE_TASK_BY_ID': {
            const newState = { ...state }
            newState.taskList = newState.taskList.filter(({ id }) => id !== payload)
            return newState
        }
        case 'USER_FETCH_FAILED':
            return {
                ...state,
                showError: true
            }
        default:
            return state;
    }
}

export default taskReducer;