// Importa Axios para conectar a API com o Front End.
import axios from "axios";

//Funcao de mostrar Pokemons.
export const getPokemons = async () => {
    try {
        const response = await axios.get("http://localhost:3000/pokemon")
        console.log(response)
        return response.data.response
    } catch (e) {
        console.log(e.message)
    }
}

// Funcao criar Pokemon.
export const postPokemon = async (body, loadPokemons) => {
    try {

        await axios.post("http://localhost:3000/pokemon", body)

        if (loadPokemons) loadPokemons();

    } catch (e) {
        console.log(e.message)
    }

}

// Funcao que Deletea pokemon pelo ID.
export const deletePokemon = async (id, loadPokemons) => {
    try {

        await axios.post("http://localhost:3000/pokemon/" + id)

        if (loadPokemons) loadPokemons();

    } catch (e) {
        console.log(e.message)
    }

}

// Funcao que Atualiza informacoes do Pokemon.
export const putPokemon = async (body, loadPokemons) => {
    try {

        await axios.post("http://localhost:3000/pokemon/" + body.id, body)

        if (loadPokemons) loadPokemons();

    } catch (e) {
        console.log(e.message)
    }

}