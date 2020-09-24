import { CHANGE_THEME } from './types';

const intitalState = {theme: true}

export const themeReduser = (state = intitalState, action) =>{

    switch(action.type){
        case CHANGE_THEME:
            return {...state, theme: action.payload}
        default: return state
    }
}