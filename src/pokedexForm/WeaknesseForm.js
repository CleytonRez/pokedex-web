import React, { useEffect, useRef } from 'react';
import './pokedexForm.css';

const WeaknesseForm = (props) => {

    // Estado contendo o nome do Pokemon 
    const [weaknesses, setWeaknesse] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setWeaknesse(props.pokemon.weaknesses)
        }

    }, [props.pokemon])

    return (
        <div className="weaknessePokemon">
            <label for="weaknessePokemon" className="weaknessePokemon">Fraquesa do POKEMON: </label>
            <select name="weaknesse" id="weaknesse">
                <option value="fire">Fogo</option>
                <option value="water">Agua</option>
                <option value="eletric">Eletricidade</option>
                <option value="plant">Planta</option>
            </select>
        </div>
    )
}

export default WeaknesseForm