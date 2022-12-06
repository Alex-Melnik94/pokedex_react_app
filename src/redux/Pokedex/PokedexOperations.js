import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

const getAllPokemons = createAsyncThunk('pokedex/getAllPokemons', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/pokemon?limit=60&offset=60');
    const pokemonDetails = Promise.all(
        data.results.map(async (pokemon) => {
            const pokeDetail = await axios.get(`/pokemon/${pokemon.name}`)
            return pokeDetail.data
        })
    )  
    return  pokemonDetails

  } catch (error) {
    toast.error('Error');
    return thunkAPI.rejectWithValue();
  }
});

const getAllTypes = createAsyncThunk('pokedex/getAllTypes', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/type')
        return data.results
    } catch (error) {
        toast.error('Error');
        return thunkAPI.rejectWithValue(); 
    }
})

const getPokemonsByType = createAsyncThunk('pokedex/getPokemonsByType', async (typeName, thunkAPI) => {
    try {
        const { data } = await axios.get(`type/${typeName}`)

        const pokemonDetails = await Promise.all(
            data.pokemon.map(async (pokemon) => {
                const pokeDetail = await axios.get(`/pokemon/${pokemon.pokemon.name}`)
                console.log('pokeDetail.data', pokeDetail.data);
                return pokeDetail.data
            })
        )
        console.log('pokemonDetails', pokemonDetails);

        return pokemonDetails
    } catch (error) {
        toast.error('Error');
        return thunkAPI.rejectWithValue(); 
    }
})

const pokedexOperations = {
    getAllPokemons,
    getAllTypes,
    getPokemonsByType
};

export default pokedexOperations;