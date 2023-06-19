import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';


export const EjercicioFecha = ({Year, Name}) => {

    const [anio, setAnio] = useState(Year);
    const [nombre, setName] = useState(Name)


    //Ejercicio resuelto con funciones
    const nextYear= e =>{
      setAnio(anio+1);
    }
    const prevYear= e =>{
      setAnio(anio-1);
    }
    const changeName = (e, variableNombre) =>{
      setName(variableNombre);
    }

  return (
    <div>
        <h1>muestreme le año</h1>

        
        <button className='boton' onClick={prevYear}>Anterior</button>

        &nbsp;
       {anio === 2023 ? (
                         <strong className='label label-green'>"El año actual es "  {anio}</strong>
                        ):
                        (
                        <strong className='label label-green'>"El año actual a cambiado a " {anio}</strong>
                        )  
        }

        &nbsp;
        <button className='boton' onClick={nextYear}>Siguiente</button>

        <hr/>
       
        <strong  className='label'>Me llamo: {nombre}</strong>  <br/>
        &nbsp;
        <input type="text" onKeyUp={e=>changeName(e, e.target.value)} placeholder='escribe algo nombre'/>


    </div>
  )
}

EjercicioFecha.propTypes= {
  anio: PropTypes.number.isRequired
}