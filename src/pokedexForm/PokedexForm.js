import React, { useEffect } from 'react';
import './PokedexForm.css';

const PokedexForm = (props) => {


    // ---------------------- STATES ----------------------------- //
    // Estado contendo o nome do Pokemon 
    const [name, setName] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setName(props.pokemon.name)
        }

    }, [props.pokemon])

    // Estado contendo o nome do Pokemon 
    const [strength, setStrength] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setStrength(props.pokemon.strength)
        }

    }, [props.pokemon])

    // Estado contendo o nome do Pokemon 
    const [defense, setDefense] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setDefense(props.pokemon.defense)
        }

    }, [props.pokemon])

    // Estado contendo o nome do Pokemon 
    const [weaknesse, setWeaknesse] = React.useState("") // Valor Inicial

    useEffect(() => {

        if (props.pokemon) {

            setWeaknesse(props.pokemon.weaknesses)
        }

    }, [props.pokemon])


    // ---------------- HANDLE CLICK ----------------------- //

    // funcao quando clica no OK.
    const handleClick = () => {

        // Variavel contendo as informacoes do body.
        const body = props.pokemon || {}
        console.log("Clicou ", body)

    }

    // ---------------- HANDLE EVENTS --------------------- //

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

    // Funcao que captura oque e escrito no Input do Weaknesse .
    const handleEventWeaknesse = (event) => {

        // seta o texto do Input nos Estados.
        setWeaknesse(event.target.value)
        console.log(event.target.value)

    }


    // Retorna HTML do Formulario.
    return (
        <div className="formContainer">

            <div className="namePokemon">
                <label for="nTarefa" className="nPokemon">Nome do POKEMON:</label>
                <input type="text" id="namePokemon" name="namePokemon" className="namePokemon" onChange={handleEventName} value={name} />
            </div>

            <div className="strenghtPokemon">
                <label for="strenghtPokemon" className="strengthPokemon" >Força do POKEMON (N): </label>
                <input type="number" className="strenghtPokemon" onChange={handleEventStrength} value={strength}></input>
            </div>

            <div className="defensePokemon">
                <label for="defensePokemon" className="defensePokemon">Defesa do POKEMON (N): </label>
                <input type="number" className="defensePokemon" onChange={handleEventDefense} value={defense}></input>
            </div>

            <div className="weaknessePokemon">
                <label for="weaknessePokemon" className="weaknessePokemon">Fraquesa do POKEMON: </label>
                <select name="weaknesse" id="weaknesse" onChange={handleEventWeaknesse} value={weaknesse}>
                    <option value="fire">Fogo</option>
                    <option value="water">Agua</option>
                    <option value="eletric">Eletricidade</option>
                    <option value="plant">Planta</option>
                </select>
            </div>

            <button type="button" className="buttonOK" onClick={handleClick} >OK</button>

        </div>
    )
}

export default PokedexForm