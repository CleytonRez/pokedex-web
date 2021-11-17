import React, { useEffect, useRef } from 'react';
import './pokedexForm.css';

const NameForm = (props) => {

    // Estado contendo o nome do Pokemon 
    const [nome, setNome] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setNome(props.pokemon.name)
        }

    }, [props.pokemon])

    return (
        <div className="namePokemon">
            <label for="nTarefa" className="nPokemon">Nome do POKEMON:</label>
            <input type="text" id="namePokemon" name="namePokemon" className="input" />
        </div>
    )
}

export default NameForm