import { LOAD_DATABASE } from '../types';

const handlers = {
    [LOAD_DATABASE]: (state, {payload}) => ({...state, database: {...payload}}),
    DEFAULT: state => state
}

export const DatabaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}