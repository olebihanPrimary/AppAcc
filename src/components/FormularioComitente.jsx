import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { VarContext } from '../App';

export const FormularioComitente = ({respuesta}) => {
    /* console.log('previo al undefine')
    console.log(JSON.stringify(respuesta))

    const { codigoComitente, codigoDepositante, tipoComitenteID, numeroCondominio,
        lugarRegPubComercio, numeroImpuestoGanancias, UsuarioModifica, 
        tipoPersonaID, tipoDocumentoID, numeroDocumento, 
        nombre,apellidos, nacionalidadID, telefonoContacto ,email ,
        tipoDomicilioID, calle, numero, piso, departamento, otros, localidadID} = JSON.stringify(respuesta); 
         const {respuesta} = respuesta; */
  
        const [formState, setFormState] = useState({respuesta});

      /*   {
            "comitenteID": 0,
            "codigoDepositante": "string",
            "tipoComitenteID": 0,
            "codigoComitente": "string",
            "personaID": 0,
            "numeroCondominio": "string",
            "lugarRegPubComercio": "string",
            "numeroImpuestoGanancias": "string",
            "usuarioModifica": "string",
            "tipoPersonaID": 0,
            "tipoDocumentoID": 0,
            "numeroDocumento": "string",
            "nombre": "string",
            "apellidos": "string",
            "nacionalidadID": 0,
            "telefonoContacto": "string",
            "email": "string",
            "domicilioID": 0,
            "tipoDomicilioID": 0,
            "calle": "string",
            "numero": "string",
            "piso": "string",
            "departamento": "string",
            "otros": "string",
            "localidadID": 0
          } */

        const { codigoComitente, codigoDepositante, tipoComitenteID, numeroCondominio,
            lugarRegPubComercio, numeroImpuestoGanancias, usuarioModifica, 
            tipoPersonaID, tipoDocumentoID, numeroDocumento, 
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
        
          
                 if ( codigoComitente == 'Código') {
        
                    console.log('No va a API');
        
                 }
                 else {
                    console.log("Actualizando intentando")
                   /*  'https://localhost:32768/api/Comitentes/update' */
                   console.log(JSON.stringify(formState));

                   console.log(varUrl)

                    const resultado = await fetch(`https://${varUrl}/api/Comitentes/update`, 
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
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Comitente:</label>
                <div className="col-sm-3">
                <input readOnly
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Codigo Comitente"
                    name="codigoComitente"
                    value={ codigoComitente === null ? "Código": codigoComitente }
                    onChange={ onInputChange }
                />
                </div>
            </div>

            <div className="row align-items-center"> 
  
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Comitente</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo de comitente"
                        name="tipoComitenteID"
                        value={  tipoComitenteID }
                        onChange={ onInputChange }

                    />

 
                </div>

            
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Depositante:</label>
                <div className="col-sm-3">
                    <input   
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Codigo Depositante"
                        name="codigoDepositante"
                        value={  codigoDepositante }
                        onChange={ onInputChange }
                    
                    />
                </div>

            </div>

            
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Número de Condominio:</label>
                <div className="col-sm-3">
                    <input   
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero de Condominio"
                        name="numeroCondominio"
                        value={  numeroCondominio }
                        onChange={ onInputChange }
                    
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Lugar Registro Público:</label>
                <div className="col-sm-3">
                    <input   
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Lugar público Registro"
                        name="lugarRegPubComercio"
                        value={  lugarRegPubComercio }
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
                        value={  numeroImpuestoGanancias }
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
                        value={  tipoPersonaID }
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
                        value={  apellidos }
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
                        value={  nombre }
                        onChange={ onInputChange }
                    />
                </div>
            </div>        
            <div className="row align-items-center">

                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Documento:</label>
                <div className="col-sm-3">

{/*                     <select className="form-select mt-2" name="tipoDocumentoID" id="exampleSelect"
                         defaultValue={"DEFAULT"}
                    >
                        <option value={"DEFAULT"}>Selecciona una opción</option>
                        <option value={ respuesta.tipoDocumentoID }>DNI</option>
                        <option value={ respuesta.tipoDocumentoID }>CUIT</option>
                        <option value={ respuesta.tipoDocumentoID }>PASAPORTE</option>

                    </select>  */}                   

                    <input   
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Documento"
                        name="tipoDocumentoID"
                        value={  tipoDocumentoID === null ? 'S/T':  tipoDocumentoID}
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
                        value={  numeroDocumento }
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
                        value={  telefonosContacto  }
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
                        value={  email }
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
                        value={  tipoDomicilioID === null ? 'S/T' :  tipoDomicilioID }
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
                        value={  calle }
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
                        value={  numero }
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
                        value={  piso }
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
                        value={  departamento }
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
                        value={  otros }
                        onChange={ onInputChange }
                    />
                </div>


            </div>

            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Localidad</label>
                <div className="col-sm-3">
                    <input   
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="localidadID"
                        name="localidadID"
                        value={  localidadID }
                        onChange={ onInputChange }
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Nacionalidad:</label>
                <div className="col-sm-3">
                    <input   
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Nacionalidad"
                        name="Nacionalidad"
                        value={  nacionalidadID }
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
