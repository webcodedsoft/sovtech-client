const initState = {
    peoples: [],
}

const peopleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GetPeople':
            return {
                ...state,
            }
        default:
            return state
    }
}

export default peopleReducer