import React, { useState, useContext } from 'react';
import { VarContext } from '../App';

import axios from 'axios';

export const FileUploadLineas = () => {

  const varUrl = useContext(VarContext);  

  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const onFileUpload = async () => {
    const reader = new FileReader();
    reader.onload = async (e) => { 
      const text = (e.target.result);
      const lines = text.split('\n');
      for (const line of lines) {
        // Aquí puedes parsear cada línea según sea necesario
        // Luego, puedes hacer un POST a tu API
        try {
          
          const response = await axios.post(`http://${varUrl}/subir`, { data: line });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    reader.readAsText(file);
  }

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Subir</button>
    </div>
  );
}


