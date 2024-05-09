import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { AccionistasNavBar } from "./AccionistasNavBar";
import { VarContext } from "../App";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Navigate, useNavigate } from "react-router-dom";


export const AccionistasLista = () => {

  
    const [data, setData] = useState([]);

    const { stringBuscar, setStringBuscar} = useContext(SearchContext);
    
    const url = useContext(VarContext);

    const navigate = useNavigate();

    const ActStringBuscar = (valor) => {

        console.log('String Buscar ' +valor)

        setStringBuscar(valor);

        navigate('../searchpageaccionistas');

    }
    
    /* const {data, isLoading} = useFetch ( 'https://localhost:32768/api/Comitentes/consultapersonas' ); */
    
     useEffect(() => {
        fetch(`https://${url}/api/Accionistas/consultapersonas`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);    


    return (
        

        <Container>

        <AccionistasNavBar/>
                <>
            <h3 className="mt-3">Lista Accionistas</h3> 
            <hr />

            <table className="Container ms-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    
                    <th scope="col" className="px-4">Código Accionista</th>              
                    <th scope="col" className="px-4">Nombre</th>
                    <th scope="col" className="px-4">Apellido</th>
                    <th scope="col" className="px-4">Email</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th className="px-4" scope="row" >{index + 1}</th>
                        <td className="codigoAccionista px-4" onClick={()=>{ActStringBuscar(item.codigoAccionista)}} >{item.codigoAccionista}</td>
                        <td className="px-4">{item.nombre}</td>
                        <td className="px-4">{item.apellidos}</td>
                        <td className="px-4">{item.email}</td>
                      </tr>
                    ))}
                </tbody>

            </table>


            

        </>
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

.codigoAccionista:hover {
  background-color: #7FFFD4; /* Cambia el color de fondo al pasar el mouse por encima */
  cursor: pointer;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`
