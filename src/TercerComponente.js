import React from 'react';
import PropTypes from 'prop-types';

// Podemos tambien hacer uso de los props usando la etiqueta 'props' como parametro en la funcion
//  flecha pero sin usar las llaves y procedemos a llamarla y acediendo a los parametros 
//  de esta forma 'props.Nombre y asi sucesivamente'

// export const TercerComponente = ({ Nombre, Apellido, Ficha }) => {
//     return (
//         <div>
//             <h1>Comunicacion entre Componentes </h1>
//             <ul>
//                 <il>{Nombre}</il>
//                 <li>{Apellido}</li>
//                 <li>{Ficha.grupo}</li>
//                 <li>{Ficha.estado}</li>
//             </ul>
//         </div>
//     )
// }

export const TercerComponente = ({Nombre, Apellido, Ficha})=>{
 return (
    <div>
        <h3>Comunicacion de Componentes</h3>
        <ul>
            <il>{Nombre}</il>
            <il>{Apellido}</il>
            <il>{Ficha.grupo}</il>
            <il>{Ficha.estado}</il>
        </ul>
    </div>
 )
}
//  tambien podemos con el proptypes decir que sea un campo requerido por ejempplo ' Nombre: PropTypes.string.isRequire'
//  nota: se inicia llamando el propTypes  con la letra 'p' en minuscula ya para haer uso si se pone en mayuscula.
TercerComponente.propTypes = {
    Nombre: PropTypes.string.isRequired,
    Apellido: PropTypes.string,
    Ficha: PropTypes.object
}

//con esta propiedad podemos pasarle un dato por defecto en caso de que venga vacio o no exista
TercerComponente.defaultProps= {
    Nombre: "camilo"
}