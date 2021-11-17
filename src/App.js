import './App.css';

function App() {
  return (
    <div className="App">
      <div className="input">
        <h1>POKEDEX</h1>
        <label for="nTarefa" className="nPokemon">Novo POKEMON:</label>
        <input type="text" id="nPokemon" name="nPokemon" className="input" />
        <button type="button" className="buttonOK">OK</button>
      </div>
    </div>
  );
}

export default App;
