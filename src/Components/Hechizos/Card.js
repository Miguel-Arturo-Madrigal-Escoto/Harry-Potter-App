import React, { useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';

import '../../css/card.css';

export const Card = ({ info }) => {

    const { data, handleIncrement, handleDecrement } = info;
    const { isDark } = useContext(DarkMode);

    return (
        <div className={ isDark ? "dark-mode card text-center animate__animated animate__fadeInUp"
                                : "card text-center animate__animated animate__fadeInUp"}>
            <div className="card-header">
                
            </div>
            <div className="card-body">
                <h5 className="card-title">{ data.hechizo }</h5>
                <p className="card-text">{ data.uso }</p>
                <button className="card-link btn btn-secondary" onClick={ handleDecrement }>Anterior</button>
                <button className="card-link btn btn-primary" onClick={ handleIncrement }>Siguiente</button>
            </div>
        </div>
    )
}
