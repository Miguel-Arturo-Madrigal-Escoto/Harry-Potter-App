import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { getPersonajes } from "../helpers/getPersonajes";

export const useFetch = ( url, id ) => {

    const isMounted = useRef(true);

    const [ personaje, setPersonaje ] = useState({
        loading: true,
        data: null,
        error: null
    });


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);
    
    useLayoutEffect(() => {
        const getData = async() => {
            setPersonaje({...personaje, loading: true});
            const data = await getPersonajes(url, id);

            if (isMounted.current) {
                setPersonaje({
                    loading: false,
                    data,
                })
            } else {
                console.log('set state no se llamó')
            }
        }

        getData();
    }, [id]);

    return personaje;
}
