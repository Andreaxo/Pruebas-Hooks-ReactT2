
// Incrementar - Decrementar - Valor Inicial (Reset)

import { useState } from "react"

export const MyExampleApp = ({valor}) => {
    const [value, setValue] = useState(valor)

    const incrementar = () => setValue(value+1)
    const decrementar = () => value && setValue(value-1) // Se utiliza una condición
    const reset = () => setValue(valor)
    
    return(
        <>
        <h1>El valor es: {value}</h1>
        <button onClick={incrementar}>Incrementar valor</button>
        <button onClick={decrementar}>Decrementar valor</button>
        <button onClick={reset}>Reset Valor</button>
        </>
    )
}

