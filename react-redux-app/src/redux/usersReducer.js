import { FETCH_POST } from './types';

const initialState = {
    fetchedUsers: []
}

export const usersReduser = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POST:
            return {...state, fetchedUsers: action.payload}
        default: return state
    }
    
}