import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allTypes } from 'redux/Pokedex/PokedexSelectors';
import pokedexOperations from 'redux/Pokedex/PokedexOperations';

const PokemonTypes = () => {
    const dispatch = useDispatch()
    const types = useSelector(allTypes);
    const [activeTypes, setActiveTypes] = useState([])

    useEffect(() => {
        
    }, [activeTypes])

    const onTypeClick = (name) => {
        dispatch(pokedexOperations.getPokemonsByType(name))
    }
    
    return ( 
        <div>
            {types.length && (
                <ul>
                    {types.map(type => {
                        return <button onClick={() => onTypeClick(type.name)} key={type.name}>{type.name}</button>
                    })}
                </ul>
            )}
        </div>
     );
}
 
export default PokemonTypes;