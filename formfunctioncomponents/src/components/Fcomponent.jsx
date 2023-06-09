import { useState } from "react"

const Fcomponent = () =>{
    const [value, setValue] = useState(0)

    // una forma de aumentar el contador con el nombre de una funcion
    const aumentarContador =  () =>{
        setValue(previousCount => previousCount + 1)
    }
    // hacer una funcion anonima y poner setValue con lo que se espera
    return <div> Componente Funcion
        <p>
            <button onClick={ () => setValue(value - 1)}>-</button>
            {value}
            <button onClick={ aumentarContador}>+</button>
        </p>

    </div>
}

export default Fcomponent