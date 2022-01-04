import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import { Card } from './Card';

export const Hechizos = React.memo(() => {
    const { counter, handleIncrement, handleDecrement } = useCounter(1);
    const { data, loading } = useFetch('https://fedeperin-harry-potter-api.herokuapp.com/hechizos/', counter);
    
    return <>
    {
        
        (!loading) && <Card info={ { data, handleIncrement, handleDecrement } }/>
    }
    </>
})
