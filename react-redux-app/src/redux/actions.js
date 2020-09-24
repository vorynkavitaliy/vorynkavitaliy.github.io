import { CHANGE_THEME, FETCH_POST, HIDE_LOADER, SHOW_LOADER } from './types';
const url = 'https://randomuser.me/api/?results='

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function changeTheme(theme) {
    return dispatch =>{
        dispatch({
            type: CHANGE_THEME,
            payload: theme
        })
    }
}

export function fetchedUsers(update) {
    return dispatch =>{
        dispatch(showLoader())
        const num = Math.floor(Math.random() * 20)
        fetch(`${url}${num}`).then(response => response.json()).then(response => {
            update({data: response.results})
            dispatch({
                type: FETCH_POST,
                payload: response.results
            }
            )}
        )
        dispatch(hideLoader())   
    }
}