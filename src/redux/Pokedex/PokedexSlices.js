import { createSlice } from '@reduxjs/toolkit';
import pokedexOperations from './PokedexOperations';

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    items: [],
    types: [],
    loader: false,
  },
  extraReducers: {
    [pokedexOperations.getAllPokemons.pending]: (state) => {
        state.loader = true;
    },
    [pokedexOperations.getAllPokemons.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.loader = false;
    },
    [pokedexOperations.getAllTypes.pending]: (state) => {
        state.loader = true;
    },
    [pokedexOperations.getAllTypes.fulfilled]: (state, action) => {
        state.types = action.payload;
        state.loader = false;
    },
    [pokedexOperations.getPokemonsByType.pending]: (state) => {
        state.loader = true;
    },
    [pokedexOperations.getPokemonsByType.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.loader = false;
    },
  },
});

export default pokedexSlice.reducer;