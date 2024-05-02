import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { PadComNavBar } from "./PadComNavBar";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { ComitenteCard } from "./ComitenteCard";


export const PadComLista = () => {

    const [data, setData] = useState([]);  
    
    /* const {data, isLoading} = useFetch ( 'https://localhost:32768/api/Comitentes/consultapersonas' ); */
    
     useEffect(() => {
        fetch('https://localhost:32768/api/Comitentes/consultapersonas')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []); 

/*       console.log(data) */
  
    return (
        
        <Container>

            <PadComNavBar/>


            <h4 className="mt-3">Padrón Descargas</h4> 
            <hr />
 
            <table className="container ms-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Comitente</th>
                    <th scope="col">Depositante</th>                  
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th scope="row" >{index + 1}</th>
                        <td>{item.codigoComitente}</td>
                        <td>{item.codigoDepositante}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellidos}</td>
                        <td>{item.email}</td>
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