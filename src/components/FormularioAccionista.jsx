import React, { useEffect } from 'react'
import { useState } from 'react';

export const FormularioAccionista = ({respuesta}) => {
    /* console.log('previo al undefine') */
    /* console.log(JSON.stringify(respuesta)) */

        const [formState, setFormState] = useState({respuesta});

        const { codigoAccionista, 
            lugarRegPubComercio, numeroImpuestoGanancias, tipoCuentaID,
            UsuarioModifica, tipoPersonaID, tipoDocumentoID, numeroDocumento, 
            nombre,apellidos, nacionalidadID, telefonoContacto ,email ,
            tipoDomicilioID, calle, numero, piso, departamento, otros, localidadID} = formState;
        

        /* console.log(codigoAccionista); */

         useEffect(() => {
            
            setFormState(respuesta);
             

        }, [respuesta]) 
        
        const onInputChange = ({ target }) => {
            const { name, value } = target;

             console.log(name);
             console.log(value); 

            setFormState({
                ...formState,
                [ name ]: value
            });
        }

        const handleSubmit = ( event ) => {

        event.preventDefault();

        const varUrl = useContext(VarContext);
      
        const url = `https://${varUrl}/api/Accionistas`;
      
          fetch(url, {
          method: 'PUT',
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
    }
    
  return (
    
    <form onSubmit={handleSubmit}>

            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Accionista:</label>
                <div className="col-sm-3">
                <input  
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Codigo Accionista"
                    name="codigoAccionista"
                    value={ codigoAccionista === null ? "Código": codigoAccionista }
                    onChange={ onInputChange }
                />
                </div>
            </div>

                     
            <div className="row align-items-center"> 

                <label className="col-sm-2 col-form-label col-form-label-sm">Lugar Registro Público:</label>
                <div className="col-sm-3">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero de Condominio"
                        name="lugarRegPubComercio"
                        value={ lugarRegPubComercio }
                        onChange={ onInputChange }
                    
                    />
                </div>


            </div>    
 
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Número Impuesto Ganancias:</label>
                <div className="col-sm-3">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Número Impuesto Ganancias"
                        name="numeroImpuestoGanancias"
                        value={ numeroImpuestoGanancias }
                        onChange={ onInputChange }
                    />
                </div>
            </div>        
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo de persona:</label>
                <div className="col-sm-3">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Persona ID"
                        name="tipoPersonaID"
                        value={ tipoPersonaID }
                        onChange={ onInputChange }
                    
                    />
                </div>
            </div>                                       


            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Apellido:</label>
                <div className="col-sm-7">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Apellido"
                        name="apellidos"
                        value={ apellidos }
                        onChange={ onInputChange }
                    
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Nombre:</label>
                <div className="col-sm-7">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Nombre"
                        name="nombre"
                        value={ nombre }
                        onChange={ onInputChange }
                    />
                </div>
            </div>        
            <div className="row align-items-center">

                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Documento:</label>
                <div className="col-sm-3">     

                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Documento"
                        name="tipoDocumentoID"
                        value={ respuesta.tipoDocumentoID === null ? 'S/T': respuesta.tipoDocumentoID}
                        onChange={ onInputChange }

                       
                    /> 
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Nro. Documento:</label>
                <div className="col-sm-3">                          
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero Documento"
                        name="numeroDocumento"
                        value={ respuesta.numeroDocumento }
                        onChange={ onInputChange }
                    />
                </div>


            </div>      
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Teléfono contacto:</label>
                <div className="col-sm-7">                                 
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="telefono Contacto"
                        name="telefonoContacto"
                        value={ respuesta.telefonoContacto === null ? "sin telefono": respuesta.telefonoContacto }
                        onChange={ onInputChange }
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Email:</label>
                <div className="col-sm-7">                                 
                    <input  
                        type="email" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Email"
                        name="email"
                        value={ respuesta.email }
                        onChange={ onInputChange }
                    />
                </div>
            </div>  

            <hr />
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Domicilio:</label>
                <div className="col-sm-1">                                 
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Domicilio"
                        name="tipoDomicilioID"
                        value={ respuesta.tipoDomicilioID === null ? 'S/T' : respuesta.tipoDomicilioID }
                        onChange={ onInputChange }
                    />
                </div>
            </div>

            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Calle</label>
                <div className="col-sm-3">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="calle"
                        name="calle"
                        value={ respuesta.calle }
                        onChange={ onInputChange }
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Numero:</label>
                <div className="col-sm-3">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero"
                        name="numero"
                        value={ respuesta.numero }
                        onChange={ onInputChange }
                    />
                </div>


            </div>
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Piso</label>
                <div className="col-sm-2">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="piso"
                        name="piso"
                        value={ respuesta.piso }
                        onChange={ onInputChange }
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Departamento:</label>
                <div className="col-sm-2">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="departamento"
                        name="departamento"
                        value={ respuesta.departamento }
                        onChange={ onInputChange }
                    />
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Otros:</label>
                <div className="col-sm-2">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="otros"
                        name="otros"
                        value={ respuesta.otros }
                        onChange={ onInputChange }
                    />
                </div>


            </div>
            <hr />
            <div className="row align-items-center">
                <div className="col">
                    <button className="btn btn-primary" type="submit">Actualizar</button>    
                </div>
            </div> 

    </form>
  )
}
