import React from 'react';

import '../../css/card.css';

export const CardHijos = ({hijos}) => {
    return (
            <div className="card" style={{ width: '18rem'}}>
                { (hijos.length > 0) && 
                    <div className="card-header">
                        <i className="fas fa-list"></i>&nbsp;&nbsp;Hijos
                    </div>
                }
                <ul className="list-group list-group-flush">
                    {
                        hijos.map((hijo, index) => (
                            <li key={ index } className="list-group-item"><i className="fas fa-arrow-right"></i> { hijo }</li>
                        ))
                    }
                </ul>
            </div>
    )
}
