import React, {useState} from 'react'
import {toolbar} from './styles/person.module.sass'

const SortUsers = ({initialData, data, update}) => {

    const [sorted, setSorted ] = useState({name: true})

    const sort = (type) => {
        setSorted(prev => ({...prev, name: type}))
        const isSorted = sorted.name;
        let direction = isSorted ? 1 : -1;
        const newSorted = [].slice.call(data).sort((a, b) => {
            if (a.name.first === b.name.first) { return 0; }
            return a.name.first > b.name.first ? direction : direction * -1;
        });
        update({data: newSorted});
    }
    const reset = () => update({data: initialData, term: ''})

    return (
        <div className={`${toolbar} toolbar`}>
            <button className="btn btn-dark" onClick={() => sort(false)}>Sort A-Z</button>
            <button className="btn btn-info" onClick={() => sort(true)}>Sort Z-A</button>
            <button className="btn btn-danger" onClick={reset}>Reset</button>
        </div>
    )
}

export default SortUsers
