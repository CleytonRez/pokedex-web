import './App.css';
import StrenghtForm from './PokedexForm/StrengthForm';
import NameForm from './PokedexForm/NameForm';
import DefenseForm from './PokedexForm/DefenseForm';
import WeaknesseForm from './PokedexForm/WeaknesseForm';

function App() {
  return (
    <div className="App">

      <div className="formContainer">
        <h1>POKEDEX</h1>
        <NameForm />
        <StrenghtForm />
        <DefenseForm />
        <WeaknesseForm />

        <button type="button" className="buttonOK">OK</button>
      </div>
    </div >
  );
}

export default App;
