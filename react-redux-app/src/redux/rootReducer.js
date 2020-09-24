import {combineReducers} from 'redux'
import { usersReduser } from './usersReducer';
import { appReduser } from './appReduser';
import { themeReduser } from './themeReduser';

export const rootReduser = combineReducers({
    users: usersReduser,
    app: appReduser,
    theme: themeReduser
})