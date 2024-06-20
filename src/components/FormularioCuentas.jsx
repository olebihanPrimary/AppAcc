import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { VarContext } from '../App';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

export const FormularioCuentas = ({respuesta}) => {

    const [formState, setFormState] = useState({respuesta});

    const { codigoCuenta, nombreCuenta, usuarioModifica,
        fechaHoraModif, tenenciaCuenta
    } = formState; 

    const [ resultado , setResultado ] = useState();

    useEffect(() => {
        if (resultado != null)
            {
        console.log(resultado.codigoCuenta);

        if (resultado.codigo != '200') {

            
            Swal.fire({
                title: 'Error',
                text: resultado.error,
                icon: 'error',
                confirmButtonText: 'Error'
              });


        } else {

            Swal.fire({
                title: '',
                text: 'Registro actualizado con éxito.',
                icon: 'success',
                confirmButtonText: 'OK'
              });

        };
    
          ;};
    },[resultado]);

    useEffect(() => {
    
        setFormState(respuesta);
        /*  */

    }, [respuesta])    
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }         
     
    
    const varUrl = useContext(VarContext);
    /* console.log(varUrl);  */     
    
    const handleSubmit = async ( event ) => {

        event.preventDefault();

         if ( codigoCuenta == 'Código') {

            console.log('No va a API');

         }
         else {

            console.log("Actualizando intentando")
           /*  'https://localhost:32768/api/Comitentes/update' */
           console.log(JSON.stringify(formState));

           console.log(varUrl)

            const resultado = await fetch(`https://${varUrl}/api/Cuentas/update`, 
            {
            method: 'PUT',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
            })
            .then(response => response.json())
            .then(data => {
                setResultado(data)
                console.log(data)
            })
            .catch(error => console.error('Error:', error));;
            
            //setResultado( response.json() );

            /* console.log(response); */
            console.log('Subido');

         }     
    }
    
  return (
    <form onSubmit={handleSubmit}>
    <div>
            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Cuenta:</label>
                <div className="col-sm-3">
                <input 
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Código Cuenta"
                    name="codigoCuenta"
                    value={ codigoCuenta === null ? "Código": codigoCuenta }
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
                <label className="col-sm-2 col-form-label col-form-label-sm">Tenencia cuenta:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tenencia"
                        name="tenenciaCuenta"
                        value={ tenenciaCuenta }
                        onChange={ onInputChange }
                    />
                </div>

            </div>    
 
            <hr />
      
            <hr />
            <div className="row align-items-center">
                <div className="col">
                    <button className="btn btn-primary" type="submit">Actualizar</button>    
                </div>
            </div> 


    </div>
    </form>
  )
}
