import React from 'react'
import ToBack from './../../molecules/ToBack/ToBack';

const Header = ({initialState, changeState}) => {
    return (
        <header>
            <ToBack initialState={initialState} changeState={changeState}/>
        </header>
    )
}

export default Header
