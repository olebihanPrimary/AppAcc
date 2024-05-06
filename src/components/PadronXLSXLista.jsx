import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { PadComNavBar } from "./PadComNavBar";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { ComitenteCard } from "./ComitenteCard";
import { VarContext } from "../App";
import { useContext } from "react";
import { PadronXLSXNavBar } from "./PadronXLSXNavBar";

export const PadronXLSXLista = () => {
    const [data, setData] = useState([]);  

    
    
    /* const {data, isLoading} = useFetch ( 'https://localhost:32768/api/Comitentes/consultapersonas' ); */
    const url = useContext(VarContext);

     useEffect(() => {
        
         fetch(`https://${url}/api/PadronXLSX`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error)); 
        
        //const {data, isLoading, hasError} = useFetch(`https://${url}/api/PadronXLSX`)
          
      }, []); 

/*       console.log(data) */
  
    return (
        
        <Container>
            
            <PadronXLSXNavBar/>


            <h4 className="mt-3">Padrón Descargas</h4> 
            <hr />
 
            <table className="Container ms-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th className="px-2" scope="col">Número Accionista</th>
                    <th className="px-2" scope="col">Número Depositante</th>                  
                    <th className="px-2" scope="col">Cuit Legajo</th>                  
                    <th className="px-2" scope="col">Nombre Legajo</th>
                    <th className="px-2" scope="col">Categoria Legajo</th>
                    <th className="px-2 text-end" scope="col" >Tenencia</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th scope="row" >{index + 1}</th>
                        <td>{item.numeroAccionista}</td>
                        <td>{item.numeroDepositanteCVSA}</td>
                        <td>{item.cuitLegajo}</td>
                        <td>{item.nombreLegajo}</td>
                        <td>{item.categoriaLegajo}</td>
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

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`