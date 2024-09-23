// Es una librería para validar parametros.
import PropTypes from 'prop-types'

export const MiPrimeraApp = ({name="Juan", edad}) => {
    return (
    <>
    <h1>Holaaaa {name}</h1> 
    <h2>la edad es {edad+10}</h2> 
    </>
)
}


// La p de propTypes (Siempre minuscula).
// Es util para establecer si es obligatorio o no, o tipos de datos.
MiPrimeraApp.propTypes = {
    edad: PropTypes.number.isRequired
}

MiPrimeraApp.defaultProps = {
    name: "Falcao"
}