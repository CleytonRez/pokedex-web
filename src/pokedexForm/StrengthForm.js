import React, { useEffect, useRef } from 'react';
import './pokedexForm.css';

const StrenghtForm = (props) => {

    // Estado contendo o nome do Pokemon 
    const [strength, setStrength] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setStrength(props.pokemon.strength)
        }

    }, [props.pokemon])

    return (
        <div className="strenghtPokemon">
            <label for="strenghtPokemon" className="strenghtPokemon">Força do POKEMON (N): </label>
            <input type="number" className="strenghtPokemon"></input>
        </div>
    )
}

export default StrenghtForm