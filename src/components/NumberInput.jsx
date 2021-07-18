import React, {useState} from 'react'
import PropTypes from 'prop-types'

import Resultado from './Resultado';
import { operaciones } from '../helpers/Operaciones';


const NumberInput = () => {

    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    });

    const {handleChange,suma,resta,multi,divi,numero1,numero2} = operaciones(numeros,setNumeros)

    return (
        <>
            <label className="mx-2">
                Número 1: <input type="number" onChange={handleChange} value={numero1} name="numero1" />
            </label>
            <label className="mx-2">
                Número 2: <input type="number" onChange={handleChange} value={numero2} name="numero2" />
            </label>

            <Resultado operacion="Suma" calculo={suma()} />
            <Resultado operacion="Resta" calculo={resta()} />
            <Resultado operacion="Multiplicación" calculo={multi()} />
            <Resultado operacion="División" calculo={divi()} />
        </>
    )
}

NumberInput.propTypes = {
    name: PropTypes.string,
    calculo:PropTypes.number,
}

export default NumberInput
