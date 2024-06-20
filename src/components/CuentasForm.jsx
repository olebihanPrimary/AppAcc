import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { PadComNavBar } from "./PadComNavBar";
import { Form, json } from "react-router-dom";
import { FormularioComitente } from "./FormularioComitente";
import { CuentasNavBar } from "./CuentasNavBar";


export const CuentasForm = () => {
    
    const formInicial = {
        CodigoCuenta: null,
        NombreCuenta: null,
        TenenciaCuenta: null,
        UsuarioModifica: null,
        
    };

    const [formState, setFormState] = useState(formInicial);

    const limpiarFormulario = () => {

        setFormState(formInicial);

    }

    const [status , setStatus] = useState(null);

    const [response, setResponse] = useState(null); 


    const { codigoCuenta, nombreCuenta, tenenciaCuenta, usuarioModifica} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
/*         console.log(name);
        console.log(value); */
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const url = 'https://localhost:32770/api/Cuentas';
      
          fetch(url, {
          method: 'POST',
          headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formState)
        })
        .then(response => response.json())
        .then(data => setResponse(data))
        .catch((error) => {
          console.error('Error:', error);
        }); 

        //limpiarFormulario();
        //setStatus(status);
         

      };




    return (
        <Container>
          
        <CuentasNavBar/>
        <>

       
            <h3 className="mt-3">Formulario Cuentas</h3> 
            <div className="alert alert-warning"> Formulario Cuentas </div>
            <hr />
            
            <form onSubmit={handleSubmit}>
            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Cuenta:</label>
                <div className="col-sm-3">
                <input 
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Código Cuenta"
                    name="codigoCuenta"
                    value={ codigoCuenta }
                    onChange={ onInputChange }
                />
                </div>
            </div>

            <div className="row align-items-center">     
            
                <label className="col-sm-2 col-form-label col-form-label-sm">Nombre Cuenta:</label>
                <div className="col-sm-8">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Nombre Cuenta"
                        name="nombreCuenta"
                        value={ nombreCuenta }
                        onChange={ onInputChange }
                    />
                </div>

            </div>

            
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tenencia:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tenencia"
                        name="Tenencia Cuenta"
                        value={ tenenciaCuenta }
                        onChange={ onInputChange }
                    />
                </div>
            </div>

            <hr />
            <div className="row align-items-center">
                <div className="col">
                    <button className="btn btn-primary" type="submit">Enviar</button>    
                </div>
            </div>          
            <hr />

            
            { response && 
                <div className="row">
                    <div className="alert alert-success" role="alert">
                         Comitente: {response.codigoComitente} {response.apellidos} {response.nombre} ingresado con éxito.
                       {/* <small> { JSON.stringify(response, null,2)  }</small>   */}

                    </div>
                    
                </div>}     

            </form>
          
        </>
        </Container>
    )
}

{/*             {
                (username === 'strider2' ) && <Message />
            } */}

const Container =styled.div`
   height:250vh;
   margin:20px;
`
