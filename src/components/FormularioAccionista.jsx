import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { VarContext } from '../App';

export const FormularioAccionista = ({respuesta}) => {
    /* console.log('previo al undefine') */
    console.log(JSON.stringify(respuesta)) 

        const [formState, setFormState] = useState({respuesta});
/**
 {"accionistaID":4,"codigoAccionista":"0264|468","personaID":9436,
 "tipoRegistroDatoID":1,"lugarRegPubComercio":"--",
 "numeroImpuestoGanancias":"--","tipoCuentaID":3,
 "usuarioModifica":"OLB","tipoPersonaID":1,"tipoDocumentoID":2,
 "numeroDocumento":"20247964976","nombre":"Juan Pedro",
 "apellidos":"Aristides","nacionalidadID":1,"telefonosContacto":"0236-681730",
 "celularDifusion":"","email":"jparisti@labragadense.com",
 "domicilioID":0,"tipoDomicilioID":1,"calle":"España",
 "numero":"866","piso":"--","departamento":"--","otros":"--","localidadID":1}
 * 
 */
        

        const { codigoAccionista, 
            lugarRegPubComercio, numeroImpuestoGanancias, tipoCuentaID,
            UsuarioModifica, tipoRegistroDatoID, tipoPersonaID,
             tipoDocumentoID, numeroDocumento, 
            nombre,apellidos, nacionalidadID, telefonosContacto ,email ,
            tipoDomicilioID, calle, numero, piso, departamento, otros, localidadID} = formState;
        

         
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


        const varUrl = useContext(VarContext);
        console.log(varUrl);

        const handleSubmit = async ( event ) => {

        event.preventDefault();

 /*         const url = `https://${varUrl}api/Comitentes/update`;

         console.log(url); */

         console.log(JSON.stringify(formState));

         if ( codigoAccionista == 'código') {

            console.log('No va a API');

         }
         else {

            const resultado = await fetch(`https://${varUrl}/api/accionistas/update`, 
            {
            method: 'PUT',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
            });
            
            const data = await response.json();
            console.log(data);

         }
      
         
    }
    
    
  return (
    
    <form onSubmit={handleSubmit}>

            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Accionista:</label>
                <div className="col-sm-3">
                <input  
                    readOnly
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
                <div className="col-sm-2">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Persona ID"
                        name="tipoPersonaID"
                        value={ tipoPersonaID }
                        onChange={ onInputChange }
                    
                    />
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo de Registro:</label>
                <div className="col-sm-2">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Registro ID"
                        name="tipoRegistroDatosID"
                        value={ tipoRegistroDatoID }
                        onChange={ onInputChange }
                    
                    />
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo de Cuenta:</label>
                <div className="col-sm-2">
                    <input  
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Cuenta ID"
                        name="tipoCuentaID"
                        value={ tipoCuentaID }
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
                        value={ tipoDocumentoID === null ? 'S/T': tipoDocumentoID}
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
                        value={ numeroDocumento }
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
                        name="telefonosContacto"
                        value={ telefonosContacto === null ? "sin telefono": telefonosContacto }
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
                        value={ email }
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
                        value={ tipoDomicilioID === null ? '1' : tipoDomicilioID }
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
                        value={ calle }
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
                        value={ numero }
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
                        value={ piso }
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
                        value={ departamento }
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
                        value={ otros }
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
