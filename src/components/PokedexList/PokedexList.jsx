import React from 'react';
import { useSelector } from 'react-redux';
import { allPokemons } from 'redux/Pokedex/PokedexSelectors';
import PokemonCard from 'components/PokemonCard/PokemonCard';

const PokedexList = () => {
    const pokemons = useSelector(allPokemons);
    return ( 
        <div>
            {pokemons.length === 0 ? (
                <h2>test</h2>
            )
            : (
                <ol>
                  {pokemons.map(pokemon => {
                      return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                  })}
                </ol>
              )}
            
        </div>
     );
}
 
export default PokedexList;