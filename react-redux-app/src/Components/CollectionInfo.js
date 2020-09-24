import React from 'react'
import {totalInfo} from './styles/person.module.sass'
const CollectionInfo = ({collection}) => {
    const filterBy = (data, field, value) => data.filter(item => item[field] === value)
    
    const males = filterBy(collection, 'gender', 'male');
    const females = filterBy(collection, 'gender', 'female');

    return (
        <div className={totalInfo}>
            <p>Общтй размер списка: {collection.length} пользователей</p>

            <div>
                <p>Мужчин: {males.length} голов</p>
                <p>Женщин: {females.length} голов</p>

                <p>Больше {
                    males.length > females.length ? `мужчин на ${ males.length -  females.length} их ${males.length} голов` : `женщин на ${ females.length -  males.length} их ${females.length} голов`
                }</p>
            </div>
        </div>
    )
}

export default CollectionInfo
