import {createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = (initialState) => {
    return createStore(rootReducer, initialState)
}

export default store