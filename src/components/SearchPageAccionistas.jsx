import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string' 
import styled from "styled-components";
import { getHeroesByName } from '../helpers'; 
import { AccionistasNavBar } from './AccionistasNavBar';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';
import { useEffect } from 'react';
import { FormularioAccionista } from './FormularioAccionista';
import { VarContext } from "../App";
import { useContext } from "react";
import { SearchContext } from '../context/SearchContext';


export const SearchPageAccionistas = () => {

  
  const navigate = useNavigate();
  const location = useLocation();

 /* console.log(data) */


 const {stringBuscar} = useContext(SearchContext);

  const { searchText, onInputChange } = useForm({
    searchText: stringBuscar
  }); 

  const formInicial = {
    accionistaID: null,
    codigoAccionista: 'código',
    personaID: 0,
    tipoRegistroDatoID: 1,
    lugarRegPubComercio: '',
    numeroImpuestoGanancias: '',
    tipoCuentaID: 0, 
    UsuarioModifica: 'OLB', 
    tipoPersonaID: 1,
    tipoDocumentoID: 1,
    numeroDocumento: '',        
    nombre:'',
    apellidos:'',
    nacionalidadID: 1,
    telefonoContacto: '',
    email: '',
    tipoDomicilioID: 1,
    calle: '',
    numero: '',
    piso: '',
    departamento: '',
    otros: '',
    localidadID: 1
};



  
  const [data, setData] = useState(formInicial);
  const [mostrar,setMostrar] = useState(data);

  const showSearch = (mostrar != null );
  const showError  = (mostrar === null);



  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const url = useContext(VarContext);

  const handleSubmit = async (event) => {
    event.preventDefault();


    fetch(`https://${url}/api/Accionistas/${searchText}`)
      .then(response => response.json())
      .then(data => {
        if (data === null) {
          console.error('Los datos recibidos son nulos');
        } else {
          setData(data);
          setMostrar(data);
        }
      })
      .catch(error => {
        console.error('Error al realizar la consulta:', error);
        setMostrar(null);
      });
    }
 
   


  return (
    <Container>
      <AccionistasNavBar />

      {/* <h1>Search</h1>  */}
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Buscar Accionista</h4>
            <hr />
            <form onSubmit={ handleSubmit } className='d-flex'>
              <input 
                type="text"
                placeholder="ingrese código a buscar"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-success ms-2">
                Buscar
              </button>

            </form>
          </div>
          </div>
          <div className="row">

          <div className="col-12">
           {/*  <h4>Resultados</h4> */}
            <hr />

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            
            <div className="alert alert-success animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Accionista Consultado.
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No existe <b> Accionista consultado </b>
            </div>


           {/*   <h4>Comitente consultado</h4> */}

             <hr />
             <Container className='container-lista'>
             
             
            
              <div className="col" 
                style={{ display: showSearch ? '' : 'none' }}>
              { <FormularioAccionista respuesta = {data}/> } 
              </div>
             </Container>
        
             
          </div>
      </div>
      

    </Container>
  )
}
const Container =styled.div`
   height:150vh;
   margin:20px;
   .container-lista{
    font-size: 14px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  .grid-item {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
  }
`
