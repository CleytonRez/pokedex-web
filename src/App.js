import './App.css';
import PokedexForm from './components/PokedexForm';
import AbilitiesForm from './components/AbilitiesForm';
import PokedexItem from './components/PokedexItem';
import PokedexList from './components/PokedexList';
import React, { useEffect } from 'react';
import { getPokemons, postPokemon, deletePokemon, putPokemon } from './api/api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { formateDateToAPI } from './utils/formatDate';

function App() {

  // Estado para armazenar as Informacoes do BackEnd
  const [pokemons, setPokemons] = React.useState([])

  // Estadi para Atualizar a lista.
  const [pokemonUpdate, setPokemonUpdate] = React.useState(null)

  // Carrega as Informacoes do BackEnd.
  const loadPokemons = async () => {

    const response = await getPokemons()

    setPokemons(response)
  }

  console.log(pokemons)


  // Funcao useEffect que carrega os Pokemons da Pokedex. 
  React.useEffect(() => {
    loadPokemons()
  }, [])


  // Funcao que adiciona nova tarefa ao Estado.
  const handleSetPokemon = (pokemon) => {

    // Se for pokemonUpdate ele atualiza e cria Pokemons.
    if (pokemonUpdate) {
      putPokemon(pokemon, loadPokemons)
    } else {
      postPokemon(pokemon, loadPokemons)
    }

    // Chama Funcao com valor nulo.
    setPokemonUpdate(null)
  }

  // Retorna Componente com HTML.
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">LIST</Link>
              </li>
              <li>
                <Link to="/registration">REGISTRATION</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/registration">
              <div className="formContainer">
                <h1>POKEDEX</h1>

                <PokedexForm handleSetPokemon={handleSetPokemon} pokemon={pokemonUpdate} />

              </div>
            </Route>
            <Route path="/">
              <div className="formContainer">
                <h1>POKEDEX</h1>

                <PokedexList items={pokemons} />

              </div>
            </Route>
          </Switch>
        </div>
      </Router>

    </div >
  );
}

export default App;
