import { HIDE_LOADER, SHOW_LOADER } from './types';

const intitalState = {loading: false}

export const appReduser = (state = intitalState, action) =>{

    switch(action.type){
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        default: return state
    }
}