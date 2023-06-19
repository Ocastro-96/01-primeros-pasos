//importar Modulos de reac
import React from "react";

//Funcion del Componente
const MiComponente = () => {

    let nombre = "oscar lorenzo";
    let apodo = "Loro parrot";

    let MiPerro ={
        nombre: 'gasparin',
        edad: 14,
        raza: 'flexpuder'
    };

    return (
        /**se puede usar de dos formas el fragment de forma abreviada o no abreviada  */
        <div className="MiComponente">
            <ol>
                <li> Nombre: <strong>{nombre}</strong> </li>
                <li> Apodo: <strong>{apodo}</strong></li>
                <li> Perro Nombre: <strong>{MiPerro.nombre}</strong></li>
                <li> Perro edad: <strong>{MiPerro.edad}</strong></li>
                <li> Perro Raza: <strong>{MiPerro.raza}</strong></li>
            </ol>

            <ul>
                <li>Angular</li>
                <li>javascript</li>
                <li>vue</li>
            </ul>
        </div>
    );
};

//exportamos el componente

export default MiComponente;