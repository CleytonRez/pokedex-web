import React from "react";
import PokemonItem from "./PokedexItem";

// Componente que adiciona a lista de Pokemons para o Usuario.
const PokedexList = (props) => {
    return (
        <div>
            {
                // Mapeia os Pokemons retornando para o Usuario.
                props.items.map((pokemon) => {

                    // Retorna os Pokemons para o Usuario.
                    return <PokemonItem pokemon={pokemon} />
                })
            }
        </div>
    )
}

export default PokedexList