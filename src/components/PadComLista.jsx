import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { PadComNavBar } from "./PadComNavBar";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { ComitenteCard } from "./ComitenteCard";
import { VarContext } from "../App";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {FileUpload} from "./FileUpLoad";


export const PadComLista = () => {

    const p = '';

    const { searchText, onInputChange } = useForm({
      searchText: p
    }); 
 

    const [data, setData] = useState([]);  

    const url = useContext(VarContext);

    const { stringBuscar, setStringBuscar} = useContext(SearchContext);
    
    const [endPoint, setEndPoint ] = useState(`https://${url}/api/PadCom`)

    const navigate = useNavigate();

    const handleSubmit = async (event) => {

      event.preventDefault();
  
      console.log();

        if ( searchText == null ){
          
          setEndPoint(`https://${url}/api/PadCom/nombre/0`)

        } else {

          setEndPoint(`https://${url}/api/PadCom/nombre/${searchText}`)

        }
      
      }


    const ActStringBuscar = (valor) => {

        console.log('String Buscar ' +stringBuscar)
        setStringBuscar(valor);

        navigate('../searchpagepadcom');

    }
    
    /* const {data, isLoading} = useFetch ( 'https://localhost:32768/api/Comitentes/consultapersonas' ); */
   

      useEffect(() => {
         fetch(endPoint)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, [endPoint]); 

/*       console.log(data) */
  
    return (
        
        <Container>

            <PadComNavBar/>

            
            <div className="row ms-2">

              <div className="col-5">
               {/*  <h4>Búsqueda por cuenta</h4> */}
                <hr />
                <form onSubmit={ handleSubmit } className='d-flex'>
                  <input 
                    type="text"
                    placeholder="búsqueda por cuenta"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ onInputChange } 
                  />

                  <button type="summit" className="btn btn-outline-success ms-2">
                    Buscar
                  </button>

                </form>
              </div>
              </div>
            <hr />
            <FileUpload />

            <h4 className="mt-3">Padrón Descargas</h4> 
            <hr />
 
            <table className="Container ms-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th className="px-2" scope="col">Comitente</th>
                    <th className="px-2" scope="col">Depositante</th>                  
                    <th className="px-2" scope="col">CUIT</th>                  
                    <th className="px-2" scope="col">Nombre Cuenta</th>
                    <th className="px-2" scope="col">Denominación</th>
                    <th className="px-2 text-end" scope="col" >Tenencia</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th scope="row" >{index + 1}</th>
                        <td>{item.comitente}</td>
                        <td>{item.depositante}</td>
                        <td className="cuit"  onClick={() => ActStringBuscar(item.cuit)} >{item.cuit}</td>
                        <td>{item.nombrE_CUENTA}</td>
                        <td>{item.denominacion}</td>
                        <td className="text-end">{parseFloat(item.tenencia).toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>

            </table>
           

             
             {/* <p>{JSON.stringify(data)}</p>  */}
             {/* <p>{ data.nombre }</p> */}

  
        </Container>
    )
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

.cuit:hover {
  background-color: #7FFFD4; /* Cambia el color de fondo al pasar el mouse por encima */
  cursor: pointer;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`