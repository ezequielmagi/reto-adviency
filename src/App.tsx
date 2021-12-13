import { useState } from "react";
import "./styles.css";

export default function App() {
  const [regalos, setRegalos] = useState([
    "Medias",
    "Calzoncillos",
    "Crema de Afeitar"
  ]);

  return (
    <div className="App">
      <h1>Regalos</h1>
      <ul>
        {regalos.map((regalo) => (
          <li key={regalo}>{regalo}</li>
        ))}
      </ul>
    </div>
  );
}
