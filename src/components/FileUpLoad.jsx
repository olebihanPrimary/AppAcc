import React, { useState , useContext} from 'react';
import axios from 'axios';
import { VarContext } from '../App';

export const FileUpload = () =>
  {
  const [selectedFile, setSelectedFile] = useState(null);

  const varUrl = useContext(VarContext); 

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {

      const opciones = {
        method: 'POST',
        body: formData,
        // No se especifica 'Content-Type' en la cabecera
        // cuando se utiliza FormData
      };
      
      console.log(`https://${varUrl}/api/PadCom`)

/*       await axios.post(`http://${varUrl}/api/PadCom`, formData);
      console.log('Archivo subido correctamente'); */

      const respuesta = await fetch(`https://${varUrl}/api/PadCom`, opciones);

      // Verificar si la solicitud fue exitosa
      if (respuesta.ok) {
        console.log('Archivo subido con éxito');

        //disparo la actualización del lote

      } else {
        console.log('Error al subir el archivo');
      }
      

    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  return (
   
      <div className="row ms-2 mt-2"> 

        <div className="col-5 mb-3">
            <input  type="file" id="subirArchivo" className="form-control-file"  onChange={handleFileChange} />
            {/* <label class="btn btn-primary" for="subirArchivo">Elegir archivo</label> */}
        </div>


          <div className="col-5">
              <button onClick={uploadFile} className="btn btn-outline-success " >Subir archivo</button>          
          </div>   
  
      </div>
    
  );
}

