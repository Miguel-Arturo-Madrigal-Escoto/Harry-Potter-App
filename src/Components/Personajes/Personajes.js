import React, { useEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import { Card } from './Card';

export const Personajes = React.memo(() => {
    const { counter, handleIncrement, handleDecrement } = useCounter(1);
    const { data, loading } = useFetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes/', counter);
    

    return <>
    {
        
        (!loading) && <Card info={ { personaje: data, handleDecrement, handleIncrement } } />
    }
    </>
})
