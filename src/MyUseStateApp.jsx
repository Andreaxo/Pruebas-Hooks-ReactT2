import { useState } from "react"

export const MyUseStateApp = ({edad}) => {
    const [valor, setValue] = useState(edad)
    console.log(valor)

    /* Valor: El que muestra cuál es el valor actual
    Set value: El que permite setear
    UseState: Donde inicializa la variable */

    const incrementar = () => setValue(valor+1)
    return(
        <>
        <h1> Edad: {valor}</h1>
        <button onClick={incrementar}>Incrementar Valor!</button>
        </>
    )
}