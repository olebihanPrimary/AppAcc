import React, { useState, useEffect } from 'react';

export function ComitentesLista() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:32768/api/Comitentes/consultapersonas')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista de Datos</h1>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.nombre}</p>
          <p>{item.apellidos}</p>
        </div>
      ))}
    </div>
  );
}

;
