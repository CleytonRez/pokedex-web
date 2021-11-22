import React, { useEffect } from 'react';
import './AbilitiesForm.css';
import { formatDate } from '../utils/formatDate';

const AbilitiesForm = (props) => {
    // ---------------------- STATES ----------------------------- //
    // Estado contendo o nome da Abilidade. 
    const [name, setName] = React.useState("") // Valor Inicial

    console.log("NAME Abilities: ", name)

    // Estado contendo o nome do Pokemon 
    const [element, setElement] = React.useState([]) // Valor Inicial

    const [elementList] = React.useState(["Earth", "Water", "Fire", "Wind"]) // Valor Inicial

    console.log("ELEMENT ABILITIES: ", element)


    // Estado contendo o nome do Pokemon 
    const [power, setPower] = React.useState("") // Valor Inicial

    console.log("POWER ABILITIES: ", power)

    // Funcao usada para poder Editar a habilidade. So e necessario se for para poder Editar Depois.
    useEffect(() => {

        if (props.pokemon) {

            setName(props.pokemon.abilities.name)
            setElement(props.pokemon.abilities.element)
            setPower(props.pokemon.abilities.power)
        }

    }, [props.pokemon])


    // ---------------- HANDLE EVENTS --------------------- //

    // Funcao que captura oque e escrito no Input do Name.
    const handleEventName = (event) => {

        // seta o texto do Input nos Estados.
        setName(event.target.value)
        console.log(event.target.value)

    }

    // Funcao que captura oque e escrito no Input do Element.
    const handleEventElement = (event) => {

        // seta o texto do Input nos Estados.
        setElement(event.target.value)

    }

    // Funcao que captura oque e escrito no Input do Power.
    const handleEventPower = (event) => {

        // seta o texto do Input nos Estados.
        setPower(event.target.value)
        console.log(event.target.value)

    }

    // ---------------- HANDLE CLICK ----------------------- //

    // funcao quando clica no + (ADD).
    const handleClickADD = () => {

        // Variavel contendo as informacoes do body.
        const body = props.pokemon || {}

        props.handleSetAbilities(
            {
                name,
                element,
                power

            }
        )
        console.log(name, element, power)
        console.log("Clicou HANDLECLICKADD ")

        // Limpa os Inputs depois que clicar no botao.
        setName("")
        setElement("")
        setPower("")

    }

    // Retorna HTML do Formulario.
    return (
        <div className="abilitiesPokemon">
            <br />
            <label for="abilitiesPokemon">Abilities:</label>

            <div className="nameAbilities">
                <label for="nameAbilities" className="nAbilities">Abilitie Name:</label>
                <input type="text" id="nameAbilities" name="nameAbilities" className="nameAbilities" onChange={handleEventName} value={name} />
            </div>

            <div className="elementAbilities">
                <label for="elementAbilities" className="elementAbilities" >Abilitie Element: </label>
                <select name="elements" id="elements" onChange={handleEventElement}>

                    {
                        elementList.map((e) => {
                            return (
                                <option value={e}>{e}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="powerAbilities">
                <label for="powerAbilities" className="powerAbilities">Abilities Power (N): </label>
                <input type="number" className="powerAbilities" onChange={handleEventPower} value={power}></input>
            </div>

            <br />
            <button type="button" className="buttonADD" onClick={handleClickADD} >+</button>

            <div>
                {props.abilities && props.abilities.map((ability) => {
                    return (
                        <div>
                            <p className="textPokemonAbility">Ability Name: {ability.name}</p>
                            <p className="textPokemonAbility"> Element: {ability.element}</p>
                            <p className="textPokemonAbility"> Power: {ability.power}</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default AbilitiesForm