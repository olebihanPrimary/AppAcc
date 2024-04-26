import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { ComitentesNavBar } from "./ComitentesNavBar";
import { useFetchCache } from "../hooks/useFetchCache";
import { LoadingMessage } from "./LoadingMessage";
import { ComitenteCard } from "./ComitenteCard";


export const ComitentesLista = () => {

    /*const [formState, setFormState] = useState({
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
    }, [ email ]);*/
    
    
    const { data, hasError, isLoading } = useFetchCache("https://localhost:32768/api/Comitentes/consultapersonas");

    //const arr = Object.entries(data);
    //console.log(data);

    //const {nombre, apellidos } = data

    //console.log(nombre);

    


    return (
        
        <Container>

        <ComitentesNavBar/>
            <>
            <h4 className="mt-3">Lista Comintentes</h4> 
            <hr />
            
            { isLoading ? <LoadingMessage/> :
            (   <>
    
                    <p> {JSON.stringify(data)} </p>
    
                 </>
            )
            }
             
             {/* <p>{JSON.stringify(data)}</p>  */}
             {/* <p>{ data.nombre }</p> */}

             

        </>
        </Container>
    )
}

const Container =styled.div`
   height:100vh;
   margin:20px;
`