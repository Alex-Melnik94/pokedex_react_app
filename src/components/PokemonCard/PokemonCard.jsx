import React from 'react';

const PokemonCard = ({pokemon}) => {
    return ( 
        <li>{pokemon.name}</li>
     );
}
 
export default PokemonCard;