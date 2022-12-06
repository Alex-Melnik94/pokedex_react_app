import React, { useEffect } from 'react';
import PokedexList from 'components/PokedexList/PokedexList';
import PokemonTypes from 'components/PokemonTypes/PokemonTypes';
import { useDispatch } from 'react-redux';
import pokedexOperations from 'redux/Pokedex/PokedexOperations';

const Pokedex = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokedexOperations.getAllPokemons());
    dispatch(pokedexOperations.getAllTypes());
  }, [dispatch]);



    return ( 
        <div>
            <PokemonTypes />
            <PokedexList />
        </div>
     );
}
 
export default Pokedex;