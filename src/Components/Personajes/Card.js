import React, { useContext } from 'react'
import { CardHijos } from './CardHijos'
import { DarkMode } from '../../context/DarkMode';

import '../../css/card.css';

export const Card = ({ info }) => {
    
    const { personaje, handleDecrement, handleIncrement } = info;

    const { isDark } = useContext(DarkMode);

    return (
        <div className={ isDark ? "dark-mode" : undefined }>
            <div className="card animate__animated animate__fadeInUp" style={{ width: '18rem', margin: '50px auto'}}>
                <img src={ personaje.imagen } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ personaje.personaje }</h5>
                    <p className="card-text">{ personaje.interpretado_por }</p>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        (personaje.estudianteDeHogwarts) && <li className="list-group-item">Estudiante de Hogwarts</li>
                    }
                    <li className="list-group-item">{ personaje.casaDeHogwarts }</li>
                    <CardHijos hijos={ personaje.hijos }/>
                </ul>
                <div className="card-body" style={{ margin: '0 auto'}}>
                    <button className="card-link btn btn-secondary" onClick={ handleDecrement }>Anterior</button>
                    <button className="card-link btn btn-primary" onClick={ handleIncrement }>Siguiente</button>
                </div>
            </div>
        </div>
)
}
