import React, { useEffect, useRef } from 'react';
import './pokedexForm.css';

const DefenseForm = (props) => {

    // Estado contendo o nome do Pokemon 
    const [defense, setDefense] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setDefense(props.pokemon.defense)
        }

    }, [props.pokemon])

    return (
        <div className="defensePokemon">
            <label for="defensePokemon" className="defensePokemon">Defesa do POKEMON (N): </label>
            <input type="number" className="defensePokemon"></input>
        </div>
    )
}

export default DefenseForm