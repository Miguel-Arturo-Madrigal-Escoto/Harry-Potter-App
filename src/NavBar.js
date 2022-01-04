/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { DarkMode } from './context/DarkMode';
import {
    NavLink
  } from "react-router-dom";

import './css/navbar.css';

export const NavBar = () => {
    
    const [isSelected, setIsSelected] = useState(false);
    const { isDark, handleSetDark } = useContext(DarkMode);

    return (
        <nav 
        className={ isDark ? "navbar navbar-expand-lg navbar-dark bg-dark"
                           : "navbar navbar-expand-lg navbar-light bg-light"}
        >
            <div className={ isDark ? "container-fluid dark-mode" : "container-fluid" }
            >
                <a className="navbar-brand">
                    <button className="icon-sun" onClick={ () => handleSetDark(false) }><i className="fas fa-sun"></i></button>
                    <button className="icon-moon" onClick={ () => handleSetDark(true) }><i className="fas fa-moon"></i></button>
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={ () => setIsSelected(!isSelected) }
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={ (!isSelected)? 'collapse navbar-collapse': 'navbar-collapse'}id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact="true" to={ process.env.PUBLIC_URL + '/'} className={({ isActive }) => isActive? "nav-link active": 'nav-link'} aria-current="page" href="#"><i className="fas fa-hat-wizard"></i> Personajes</NavLink>
                        <NavLink exact="true" to={ process.env.PUBLIC_URL + '/hechizos'} className={({ isActive }) => isActive? "nav-link active": 'nav-link'} href="#"><i className="fas fa-quidditch"></i> Hechizos</NavLink>
                    </div>
                </div>
        </div>
        </nav>
    )
}
