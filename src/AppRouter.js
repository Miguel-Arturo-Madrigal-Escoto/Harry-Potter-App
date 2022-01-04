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
                <Routes basename={ process.env.PUBLIC_URL }>
                    <Route exact="true" path="/Harry-Potter-App" element={ <Personajes /> } />
                    <Route exact="true" path="/hechizos" element={ <Hechizos /> } />
                </Routes>
            </Router>
        </>
    )
}
