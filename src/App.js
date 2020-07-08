import React from "react";
/* Componentes usados */
import Login from "./components/loginForm";
import "./App.css";
/* importamos estilos bulma */
import "./css/bulma.min.css";

function App() {
  return (
    <div className="App">
      <div className="columns is-centered">
        <div className="tam400 mx-auto">
          <Login></Login>
        </div>
      </div>
    </div>
  );
}

export default App;
