const login = (state = [], payload) => {
    switch(payload) {
        case 'login':
            return [...state, payload.item]
        default:
            return state;
    }
}

export default login