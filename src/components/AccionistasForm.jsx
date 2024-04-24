import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { AccionistasNavBar } from "./AccionistasNavBar";


export const AccionistasForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
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
    }, [ email ]);


    return (
        <Container>
          
        <AccionistasNavBar/>
                <>
            <h1>Formulario Accionistas</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />


            {
                (username === 'strider2' ) && <Message />
            }

        </>
        </Container>
    )
}

const Container =styled.div`
   height:100vh;
   margin:20px;
`
