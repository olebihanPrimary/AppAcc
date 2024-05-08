import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string' 
import styled from "styled-components";
import { getHeroesByName } from '../helpers'; 
import { ComitentesNavBar } from './ComitentesNavBar';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';
import { useEffect } from 'react';
import { FormularioComitente } from './FormularioComitente';
import { useContext } from 'react';
import { VarContext } from '../App';
import { SearchContext } from '../context/SearchContext';


export const SearchPageComitentes = () => {

  
  const navigate = useNavigate();
  const location = useLocation();


  const {stringBuscar} = useContext(SearchContext);

  console.log('esta es la rta '+stringBuscar)
  const { searchText, onInputChange } = useForm({
    searchText: stringBuscar
  }); 

  const formInicial = {
    codigoComitente: null,
    codigoDepositante:'',
    tipoComitenteID: 1,
    numeroCondominio: '',
    lugarRegPubComercio: '', 
    numeroImpuestoGanancias: '', 
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

    
    await fetch(`https://${url}/api/Comitentes/${searchText}`)
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
      <ComitentesNavBar />

      {/* <h1>Search</h1>  */}
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Buscar Comitente</h4>
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
              Comitente Consultado.
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No existe <b> Comitente consultado </b>
            </div>


           {/*   <h4>Comitente consultado</h4> */}

             <hr />
             <Container className='container-lista'>
             
             
             {/* <div className="row">

               <div className="col-4">
                <p>{data.codigoDepositante}</p>
              </div>
              <div className="col-4">
                <p>{}</p>
              </div>
              <div className="col-4">
                <p>{data.comitenteID}</p>
              </div> 

              <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Comitente:</label>
                <div className="col-sm-3">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Codigo Comitente"
                    name="codigoComitente"
                    value={ data.codigoComitente }
                />
                </div>
              </div>
              
             
              </div> */}
              <div className="col" 
                style={{ display: showSearch ? '' : 'none' }}>
              { <FormularioComitente respuesta = {data}/> } 
              </div>
             </Container>
              
         {/*     {  
                data.map((item, index) => (
                <div key={index} className="row text-sm">

                  <div className="col-1 text-end"> {item.codigoComitente} </div>
                  <div className="col-1 text-end"> {item.codigoDepositante} </div>

                </div>))
              } */}
                
              

             
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
