import React from 'react';
import './PokedexItem.css';

// Componente que monstra os novos Pokemons para o Usuario
const PokedexItem = (props) => {
    console.log(props)

    // Retorna
    return (
        <div className="divNovoPokemon">
            <p>POKEMON FORM - {props.pokemon.name} : </p>
            <p className="textPokemonItem"> - Name: {props.pokemon.name}</p>
            <p className="textPokemonItem"> - Strenght: {props.pokemon.strength}</p>
            <p className="textPokemonItem"> - Defense: {props.pokemon.defense}</p>
            <p className="textPokemonItemWeakTitle"> - Weaknesses: {props.pokemon.weaknesses.map((weak) => {
                return <p className="textPokemonItemWeak">| {weak} </p>
            })}</p>
            <p className="textPokemonAbilities">ABILITIES: {props.pokemon.abilities.map((ability) => {
                return (
                    <div>
                        <p className="textNameAbilities"> - Name: {ability.name} </p>
                        <p className="textElementAbilities">| Element: {ability.element} </p>
                        <p className="textPowerAbilities">| Power: {ability.power}</p> <br />
                    </div>
                )
            })}</p>
        </div>

    )
}

export default PokedexItem