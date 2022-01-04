import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {
    const [counter, setCounter] = useState( initialState );

    const handleIncrement = ( ) => {
        setCounter(counter + 1);
    }

    const handleDecrement = ( ) => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const handleReset = () => {
        setCounter( initialState );
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    };

}