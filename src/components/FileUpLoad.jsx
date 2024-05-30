import React, { useState , useContext} from 'react';
import styled from "styled-components";
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { UploadOutlined } from '@mui/icons-material';
import { VarContext } from '../App';
import { useRef } from 'react';

export const FileUpload = () =>
  {

    
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultado, setResultado ] = useState('Seleccione el archivo a subir');
  const [nombreArchivo , setNombreArchivo] = useState('');

  const varUrl = useContext(VarContext); 

  

  const fileInputRef = useRef();

  const handleFileChange = (event) => {

    setSelectedFile(event.target.files[0]);
    setNombreArchivo(event.target.files[0].name);
    setResultado( 'Haga click en Subir archivo.');
    
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
      setResultado('Cargando Archivo y actualizando Padrón aguarde un momento....')

      const respuesta = await fetch(`https://${varUrl}/api/PadCom`, opciones);

      // Verificar si la solicitud fue exitosa
      if (respuesta.ok) {
        console.log('Archivo subido con éxito y Padrón actualizado');

        setResultado('Archivo subido con éxito y Padrón actualizado')
        console.log(toString(respuesta))

        //disparo la actualización del lote

      } else {
        console.log('Error al subir el archivo');
        setResultado('Error al subir el archivo')
      }
      

    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  return (
   <>
      <div className="row ms-2 mt-2 align-item-middle"> 

        <div className="col-1 mb-3">
            <input  type="file" id="subirArchivo" 
                    ref={ fileInputRef }
                    className="form-control-file"  
                    onChange={handleFileChange}
                    style={{display: 'none'}} 
            />
            {/* <label class="btn btn-primary" for="subirArchivo">Elegir archivo</label> */}
        </div>

        <div className="col-1 mb-3">

        <IconButton
          size='large'
          color="primary"
          onClick={() => { fileInputRef.current.click()}}>
          <UploadOutlined />
        </IconButton>
     
        </div>
        <div className="resultado success col-3 mt-2">

           {nombreArchivo}

        </div>


          <div className="col-5 mb-3">
              <button onClick={uploadFile} className="btn btn-outline-success " >Subir archivo</button>          
          </div>   
  
      </div>

      <div className="row " >
        <div className="col text-primary ms-5 "> { resultado } </div>
      </div>
      <hr />
    </>
    
  );
}

const Container =styled.div`
   height:200vh;
   margin:20px;
   font-size: 14px;
   color: ${(props) => props.theme.text};
   background: ${(props) => props.theme.bg};

  .bg-color {
    background-color: #d6d8db; 
  }

.table{
  font-size: 14px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
 }
   
.container-lista{
  font-size: 14px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.resultado:hover {
  background-color: #7FFFD4; /* Cambia el color de fondo al pasar el mouse por encima */
  cursor: pointer;
}



`

