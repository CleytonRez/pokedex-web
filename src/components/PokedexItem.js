import React from 'react';
import './PokedexItem.css';

// Componente que monstra os novos Pokemons para o Usuario
const PokedexItem = (props) => {
    console.log(props)

    // Retorna
    return (
        <div className="divNovoPokemon">
            <p>Pokemon: </p>
            <p className="textPokemonItem">Name: {props.pokemon.name}</p>
            <p className="textPokemonItem">Strenght: {props.pokemon.strength}</p>
            <p className="textPokemonItem">Defense: {props.pokemon.defense}</p>
            <p className="textPokemonItem">Weaknesses: {props.pokemon.weaknesses}</p>
        </div>

    )
}

export default PokedexItem