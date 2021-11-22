import React, { useEffect } from 'react';
import './PokedexForm.css';
import { formatDate } from '../utils/formatDate';
import AbilitiesForm from './AbilitiesForm';

const PokedexForm = (props) => {


    // ---------------------- STATES ----------------------------- //
    // Estado contendo a data do Pokemon 
    const [date, setDate] = React.useState(formatDate(new Date())) // Valor Inicial


    // Estado contendo o nome do Pokemon 
    const [name, setName] = React.useState("") // Valor Inicial

    console.log("NAME: ", name)

    // Estado contendo a Forca do Pokemon 
    const [strength, setStrength] = React.useState("") // Valor Inicial

    console.log("Strength: ", strength)


    // Estado contendo a Defesa do Pokemon 
    const [defense, setDefense] = React.useState("") // Valor Inicial

    console.log("Defense: ", defense)


    // Estado contendo a Fraqueza do Pokemon 
    const [weaknesses, setWeaknesses] = React.useState([]) // Valor Inicial

    const [weaknessList] = React.useState(["Fire", "Water", "Wind", "Earth"])


    console.log("Weaknesses: ", weaknesses)


    // Estado de Habilidades.
    const [abilities, setAbilities] = React.useState([]) // Valor Inicial


    // Funcao usada para poder editar as informacoes.
    useEffect(() => {

        if (props.pokemon) {

            setDate(formatDate(new Date(props.pokemon.date)))
            setName(props.pokemon.name)
            setStrength(props.pokemon.strength)
            setDefense(props.pokemon.defense)
            setWeaknesses(props.pokemon.weaknesses)
            setAbilities(props.pokemon.abilities)
        }

    }, [props.pokemon])
    console.log("DATE: ", date)


    // ---------------- HANDLE EVENTS --------------------- //

    // Funcao que captura oque e escrito no Input do Name.
    const handleEventDate = (event) => {

        // seta o texto do Input nos Estados.
        setDate(formatDate(new Date(event.target.value)))
        console.log(event.target.value)

    }
    // Funcao que captura oque e escrito no Input do Name.
    const handleEventName = (event) => {

        // seta o texto do Input nos Estados.
        setName(event.target.value)
        console.log(event.target.value)

    }

    // Funcao que captura oque e escrito no Input do Strength.
    const handleEventStrength = (event) => {

        // seta o texto do Input nos Estados.
        setStrength(event.target.value)
        console.log(event.target.value)

    }

    // Funcao que captura oque e escrito no Input do Defense.
    const handleEventDefense = (event) => {

        // seta o texto do Input nos Estados.
        setDefense(event.target.value)
        console.log(event.target.value)

    }

    // Funcao que captura oque e escrito no Input do Weaknesses .
    const handleEventWeaknesses = (event) => {

        // seta o texto do Input nos Estados.
        const value = event.target.value

        if (weaknesses.includes(value)) {
            const newWeaknesses = []
            weaknesses.forEach((weak) => {
                if (weak !== value) {
                    newWeaknesses.push(weak)
                }
            })
            setWeaknesses(newWeaknesses)

        } else {
            setWeaknesses([...weaknesses, event.target.value])
        }
        console.log(value)

    }

    // ---------------- HANDLE CLICK ----------------------- //

    // funcao quando clica no OK.
    const handleClick = () => {

        // Variavel contendo as informacoes do body.
        const body = props.pokemon || {}

        props.handleSetPokemon(
            {
                name,
                strength,
                defense,
                weaknesses,
                abilities,
                "img": null

            }
        )
        console.log(name, strength, defense, weaknesses)
        console.log("Clicou ")

        // Limpa os Inputs do Formulario.
        setDate("")
        setName("")
        setStrength("")
        setDefense("")
        setWeaknesses("")
        setAbilities("")

    }

    // Funcao que adiciona as informacoes de Habilidade na Lista/Estado abilities.
    const handleSetAbilities = (ability) => {
        const newAbilitiesList = [...abilities]
        newAbilitiesList.push(ability)

        setAbilities(newAbilitiesList)
    }



    // Retorna HTML do Formulario.
    return (
        <div className="formContainer">

            <div className="birthDate">
                <label for="birthDate" className="birthDate">Pokemon BirthDate:</label>
                <input type="date" id="birthDate" name="birthDate" className="birthDate" onChange={handleEventDate} value={date} />
            </div>

            <div className="namePokemon">
                <label for="namePokemon" className="nPokemon">Pokemon Name:</label>
                <input type="text" id="namePokemon" name="namePokemon" className="namePokemon" onChange={handleEventName} value={name} />
            </div>

            <div className="strenghtPokemon">
                <label for="strenghtPokemon" className="strengthPokemon" >Pokemon Strength (N): </label>
                <input type="number" className="strenghtPokemon" onChange={handleEventStrength} value={strength}></input>
            </div>

            <div className="defensePokemon">
                <label for="defensePokemon" className="defensePokemon">Pokemon Defense (N): </label>
                <input type="number" className="defensePokemon" onChange={handleEventDefense} value={defense}></input>
            </div>

            <div className="weaknessesPokemon">
                <label for="weaknessesPokemon" className="weaknessesPokemon">Pokemon Weaknesses: </label>
                {
                    weaknessList.map((weak) => {
                        return (
                            <div>
                                <label>{weak + " "}</label>
                                <input type="checkbox" id={weak} name={weak} value={weak} onChange={handleEventWeaknesses}></input>
                            </div>
                        )
                    })
                }
            </div>
            <AbilitiesForm handleSetAbilities={handleSetAbilities} pokemon={props.pokemonUpdate} abilities={abilities} />
            <br />
            <button type="button" className="buttonOK" onClick={handleClick} >Ok</button>
        </div>
    )
}

export default PokedexForm