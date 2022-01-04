import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { DarkMode } from './context/DarkMode'

export const App = () => {

    const [isDark, setIsDark] = useState(false);

    const handleSetDark = (value) => {
        setIsDark(value);
    }

    return (
        <div>
            <DarkMode.Provider value={ { isDark, handleSetDark } }>
                <AppRouter />
            </DarkMode.Provider>  
        </div>
    )
}
