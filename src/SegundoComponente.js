import React from 'react'

export const SegundoComponente = () => {

   const carro = ["Ferrari","Audi","Lamborgini"];
    const libros2 = ["japilora2", "juego de tronos2", "clean code2"]
    const perros =[];
    const datosMios = ["oscar", 21, null, true, "colombia"];
    const filtrarDato = datosMios.filter(elemento => typeof elemento === "number");
    return (
        <div className='segundo-componente'>
            
            <ul>
                <li>{carro[1]}</li>
                <li>{carro[2]}</li>
                <li>{carro[0]}</li>
                <li>{filtrarDato}</li>
            </ul>

            <ol>
                {
                    libros2.map((libros2, indice) => {
                        return <li key={indice}>{libros2}</li>;
                    })
                }
            </ol>

{/**validacion usando jsx */}
            {perros.length >= 1 ? 
                (<ol>
                    {
                        perros.map((perros, indice) => {
                            return <li key={indice}>{perros}</li>;
                        })
                    }
                </ol>)
                :(<p>no hay perros</p>)

            }

        </div>
    )
}
