import naruto from "./images/naruto-img.png";
import sasuke from "./images/sasuke-img.png";
import "./App.css";
import { useRef } from "react";

function App() {
  const refCaja = useRef();
  const cambio = 30;

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  };

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };

  const cambiar = (e) => {
    if (e.target.src.includes(naruto)) {
      e.target.src = sasuke;
    } else {
      e.target.src = naruto;
    }
  };

  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value;
  };

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>aceptar</button>
      <div>
        <img onClick={cambiar} src={naruto} />
      </div>
      <input onChange={lectura} className="campo" />
    </>
  );
}

export default App;
