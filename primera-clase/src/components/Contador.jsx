import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  console.log("actualizando contador");
  return (
    <div>
      <button
        onClick={(e) => {
          setContador((prevState) => {
            return prevState + 1;
          });
          setContador((prevState) => {
            return prevState + 1;
          });
        }}
      >
        +1
      </button>
      <div>{contador}</div>
    </div>
  );
}

/*
{
  type: div
  class: App
  children: [
    {
      type: h1
      innerText: 
    }
  ]
}
*/
