import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Contador } from "./components/Contador";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");

  // estado = [valor, setValor]

  // setValor(nuevo_valor_estado)

  // setValor( (prevState) => { return (nuevo_Valor_estado)} )
  console.log("actualizando app");

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <input
        placeholder="Ingrese su nombre"
        id="nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      ></input>
      <div className="card">
        <Contador />
        {/*Contador({name: nombre})*/}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
