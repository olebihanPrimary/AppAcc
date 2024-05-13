import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { ComitentesNavBar } from "./ComitentesNavBar";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { ComitenteCard } from "./ComitenteCard";
import { VarContext } from "../App";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";


export const ComitentesLista = () => {

    const [data, setData] = useState([]);  

  

    const { stringBuscar, setStringBuscar} = useContext(SearchContext);

    const navigate = useNavigate();

    
    const ActStringBuscar = (valor) => {

        console.log('String Buscar ' +valor)

        setStringBuscar(valor);

        navigate('../searchpagecomitentes');

    }
    
    /* const {data, isLoading} = useFetch ( 'https://localhost:32768/api/Comitentes/consultapersonas' ); */
    
    const url = useContext(VarContext);
    
     useEffect(() => {
        fetch(`https://${url}/api/Comitentes/consultapersonas`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []); 

/*       console.log(data) */
  
    return (
        
        <Container>

            <ComitentesNavBar/>


            <h4 className="mt-3">Lista Comitentes</h4> 
            <hr />
 
            <table className="Container ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" className="px-4">Comitente</th>
                    <th scope="col" className="px-4">Depositante</th>                  
                    <th scope="col" className="px-4">Nombre</th>
                    <th scope="col" className="px-4">Apellido</th>
                    <th scope="col" className="px-4">Email</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th className="px-4" scope="row" >{index + 1}</th>
                        <td className="codigoComitente px-4" onClick={()=>{ActStringBuscar(item.codigoComitente)}} >{item.codigoComitente}</td>
                        <td className="px-4">{item.codigoDepositante}</td>
                        <td className="px-4">{item.nombre}</td>
                        <td className="px-4">{item.apellidos}</td>
                        <td className="px-4">{item.email}</td>
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

.codigoComitente:hover {
  background-color: #7FFFD4; /* Cambia el color de fondo al pasar el mouse por encima */
  cursor: pointer;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`