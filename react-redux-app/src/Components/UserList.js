import React from 'react'
import { list, table, dashboard} from './styles/person.module.sass'
import Person from './Person';
const UserList = ({users, theme}) => {
    return (
        <ul className={`${list} ${theme ? table : dashboard}`}>
            {users.map(user => {
                return <Person key={user.login.uuid} user={user}/>
            })}
        </ul>
    )
}

export default UserList
