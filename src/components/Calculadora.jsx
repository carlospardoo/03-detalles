import {useState} from 'react'
import NumberInput from './NumberInput';
import Resultado from './Resultado';

const Calculadora = () => {
    
    const [suma, setSuma] = useState(0);
    
    return (
        <div>
            <NumberInput name="Número 1:" />
            <NumberInput name="Número 2:" />
            
            <Resultado operacion="Suma" calculo={suma} />
            <Resultado operacion="Resta" calculo={suma} />
            <Resultado operacion="Multiplicación" calculo={suma} />
            <Resultado operacion="División" calculo={suma} />
        </div>
    )
}

export default Calculadora
