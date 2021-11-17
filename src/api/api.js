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