const login = (state = {}, action) => {
    switch(action.type) {
        case 'login':
            return {...state, login: {user: action.payload.user}}
        default:
            return state;
    }
}

export default login