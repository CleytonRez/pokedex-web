import './App.css';
import PokedexForm from './PokedexForm/PokedexForm';
import React, { useEffect } from 'react';
import { getPokemons, postPokemon, deletePokemon, putPokemon } from './api/api';

function App() {

  // Estado para armazenar as Informacoes do BackEnd
  const [pokemons, setPokemons] = React.useState([])

  // Estadi para Atualizar a lista.
  const [pokemonUpdate, setPokemonUpdate] = React.useState(null)

  // Carrega as Informacoes do BackEnd.
  const loadPokemons = async () => {

    const response = await getPokemons()
    console.log("LOADPOKEMONS: ", response)

    setPokemons(response)
  }

  console.log(pokemons)


  // Funcao useEffect que carrega os Pokemons da Pokedex. 
  React.useEffect(() => {
    loadPokemons()
  }, [])

  const handleSetPokemon = (pokemon) => {

    if (pokemonUpdate) {
      putPokemon(pokemon, loadPokemons)
    } else {
      postPokemon(pokemon, loadPokemons)
    }

    setPokemonUpdate(null)
  }

  return (
    <div className="App">

      <div className="formContainer">
        <h1>POKEDEX</h1>

        <PokedexForm handleSetPokemon={handleSetPokemon} pokemon={pokemonUpdate} />

      </div>

    </div >
  );
}

export default App;
