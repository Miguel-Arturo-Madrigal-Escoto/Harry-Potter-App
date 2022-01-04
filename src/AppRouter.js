import React from 'react';
import { Hechizos } from './Components/Hechizos/Hechizos';
import { Personajes } from './Components/Personajes/Personajes';
import { NavBar } from './NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const AppRouter = () => {

    console.log('Me renderice: router');

    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact="true" path="/" element={ <Personajes /> } />
                    <Route exact="true" path="/hechizos" element={ <Hechizos /> } />
                </Routes>
            </Router>
        </>
    )
}
