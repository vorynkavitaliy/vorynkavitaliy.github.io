import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchedUsers, changeTheme } from '../redux/actions';

import Loader from './Loader';
import {wrapper, buttons, wrap_list} from './styles/person.module.sass'
import UserList from './UserList';
import Paginator from './Paginator';
import SearchBar from './SearchBar';
import SortUsers from './SortUsers';
import CollectionInfo from './CollectionInfo';

export default () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.fetchedUsers)
    const loader = useSelector(state => state.app.loading)
    const themeState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

    const [appState, setAppState] = useState({
        data: [],
        term: ''
    })
    const updateData = config => setAppState(prev => ({...prev, ...config}))
    useEffect(() => dispatch(fetchedUsers(updateData)), [dispatch])
    const updateList = () => dispatch(fetchedUsers(updateData))

    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(4)
    const [theme, setTheme] = useState(themeState.theme)
    
    //theme
    const onChangeTheme = () => {
        dispatch(changeTheme(!theme))
        setTheme(!theme)
    }
    //paginator
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUser = appState.data.slice(indexOfFirstUser, indexOfLastUser)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className={wrapper}>

            <SearchBar data={users} term={appState.term} update={updateData}/>
            <SortUsers initialData={users} data={appState.data} update={updateData}/>
            <div className={buttons}>
                <button className="btn btn-secondary" onClick={() => onChangeTheme()}>{theme ? "Плиткой" : "Таблица"}</button>
                <button className="btn btn-primary" onClick={updateList}>Update</button>
            </div>
            <div className={wrap_list}>
                { loader ? <Loader/> : <UserList users={currentUser} theme={theme}/>}
            </div>
            

            <Paginator usersPerPage={usersPerPage} totalUsers={appState.data.length} paginate={paginate}/>

            <CollectionInfo collection={users}/>
        </div>
    )
}
