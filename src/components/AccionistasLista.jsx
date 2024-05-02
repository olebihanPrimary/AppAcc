import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { AccionistasNavBar } from "./AccionistasNavBar";
import { VarContext } from "../App";
import { useContext } from "react";


export const AccionistasLista = () => {

   /*  const [formState, setFormState] = useState({
        username: 'strider',
        email: 'olebihan@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }


    useEffect( () => {
        // console.log('useEffect called!');
    }, []);
    
    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]); */
    const [data, setData] = useState([]);

    
    
    const url = useContext(VarContext);
    
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

            <table className="container ms-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    
                    <th scope="col">Código Accionista</th>              
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th scope="row" >{index + 1}</th>
                        <td>{item.codigoAccionista}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellidos}</td>
                        <td>{item.email}</td>
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

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`
