import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className="my-container">
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                    <span className="navbar-brand">My App</span>

                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
