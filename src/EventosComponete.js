import React from 'react'

export const EventosComponete = () => {

    // const eventoUnClick = (e, nombre) => {
    //     alert("Evento Un Click  " + nombre);

    // }

    // function eventoDosClick(e) {
    //     alert("Has Dado DoblecClick");
    // }

    const hasEntrado =(e, accion)=>{
        console.log(`Has ${accion} a la caja con el mouse!!`);
    }

    const estasDentro = (e) =>{
        console.log("Bien Hecho")
    }
    const estasAfuera = e =>{
        console.log("bien hecho, chao");
    }

    return (
        <div>
            <h1>Mis Eventos</h1>
            <h3>Evento click:</h3>
            {/* {Evento click} */}
            <p>
                <button onClick={() => {
                    alert("Me diste un click");
                }}> Da click</button>
            </p>
            {/* {Evento Dobleclick} */}
            <p>
                <button onDoubleClick={() => {
                    alert("Me diste doble click de una forma mas corta");
                }}> Da doble click</button>
            </p>
            {/* Evento de entrar y salir con el mouse sobre un evento y que se ejecute el evento */}
            <div id='caja'
                onMouseEnter={e => hasEntrado(e, "entrado")}
                onMouseLeave={e => hasEntrado(e, "salido")}
            >
                Pasa por ecima
            </div>

            <p>
                <input 
                type="text" 
                onFocus={estasDentro} 
                onBlur={estasAfuera}
                placeholder="introduce tu nombre"
                
                />
            </p>
        </div>
    )
}
