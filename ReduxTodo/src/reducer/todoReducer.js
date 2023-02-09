const initialState = {
    list: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, data, value } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                        value: value,
                    }
                ]
            }
        case 'MARK_TODO':
            const newValue = action.value;
            return {
                ...state,
               
            }
        case 'DELETE_TODO':
            const newList = state.list.filter((props) => props.id !== action.id)
            return {
                ...state,
                list: newList
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                list: []
            }
        default: return state;
    }
}

export default todoReducer;