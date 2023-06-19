import logo from './logo.svg';
import './App.css';
import MiComponente from "./MiComponente";
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponete } from './EventosComponete';
import { EjercicioFecha } from './EjercicioFecha';


function App() {
  const ficha_medica = {
    estado: "bueno",
    altura: "1.80",
    grupo: "o+"
  }
  const fecha = new Date();
  const fechaAnio = fecha.getFullYear();

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*cargamos mi componente*/}
        <div className='componentes'>
          <h1><span>Mi Primer componente</span></h1>
          <MiComponente />
          <hr />
          <h1><span>Mi segundo componente</span></h1>
          <SegundoComponente />
          <hr />
          <h1><span>Mi tercer componente</span></h1>
          <TercerComponente
            Nombre="Oscar" 
            Apellido="Castro"
            Ficha={ficha_medica} />
          <hr />
          <h1><span>Mi cuarto componente</span></h1>
          <EventosComponete />
          <hr/>
          <h3><span> Ejercicio Fecha</span></h3>
          
          <EjercicioFecha 
          Year={fechaAnio}
          Name="oscar"/>
          
        </div>

      </header>

    </div>
  );
}

export default App;
