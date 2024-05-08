import React from 'react'

export const FormularioComitente = ({respuesta}) => {
    console.log('previo al undefine')
    console.log(JSON.stringify(respuesta))

    const { codigoComitente, codigoDepositante, tipoComitenteID, numeroCondominio,
        lugarRegPubComercio, numeroImpuestoGanancias, UsuarioModifica, 
        tipoPersonaID, tipoDocumentoID, numeroDocumento, 
        nombre,apellidos, nacionalidadID, telefonoContacto ,email ,
        tipoDomicilioID, calle, numero, piso, departamento, otros, localidadID} = JSON.stringify(respuesta); 
        /* const {respuesta} = respuesta; */

        console.log("REspuesta "+codigoComitente);
    
  return (
    
    <div>

            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Comitente:</label>
                <div className="col-sm-3">
                <input readOnly
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Codigo Comitente"
                    name="codigoComitente"
                    value={ respuesta.codigoComitente === null ? "Código": respuesta.codigoComitente }
                />
                </div>
            </div>

            <div className="row align-items-center"> 
  
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Comitente</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo de comitente"
                        name="tipoComitenteID"
                        value={ respuesta.tipoComitenteID }

                    />

 
                </div>

            
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Depositante:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Codigo Depositante"
                        name="codigoDepositante"
                        value={ respuesta.codigoDepositante }
                    
                    />
                </div>

            </div>

            
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Número de Condominio:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero de Condominio"
                        name="numeroCondominio"
                        value={ respuesta.numeroCondominio }
                    
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Lugar Registro Público:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Lugar público Registro"
                        name="lugarRegPubComercio"
                        value={ respuesta.lugarRegPubComercio }
                    
                    />
                </div>


            </div>    
 
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Número Impuesto Ganancias:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Número Impuesto Ganancias"
                        name="numeroImpuestoGanancias"
                        value={ respuesta.numeroImpuestoGanancias }
                    />
                </div>
            </div>        
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo de persona:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Persona ID"
                        name="tipoPersonaID"
                        value={ respuesta.tipoPersonaID }
                    
                    />
                </div>
            </div>                                       


            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Apellido:</label>
                <div className="col-sm-7">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Apellido"
                        name="apellidos"
                        value={ respuesta.apellidos }
                    
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Nombre:</label>
                <div className="col-sm-7">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Nombre"
                        name="nombre"
                        value={ respuesta.nombre }
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

                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Documento"
                        name="tipoDocumentoID"
                        value={ respuesta.tipoDocumentoID === null ? 'S/T': respuesta.tipoDocumentoID}
                       
                    /> 
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Nro. Documento:</label>
                <div className="col-sm-3">                          
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero Documento"
                        name="numeroDocumento"
                        value={ respuesta.numeroDocumento }
                    />
                </div>


            </div>      
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Teléfono contacto:</label>
                <div className="col-sm-7">                                 
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="telefono Contacto"
                        name="telefonoContacto"
                        value={ respuesta.telefonoContacto === null ? "sin telefono": respuesta.telefonoContacto }
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Email:</label>
                <div className="col-sm-7">                                 
                    <input readOnly
                        type="email" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Email"
                        name="email"
                        value={ respuesta.email }
                    />
                </div>
            </div>  

            <hr />
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Domicilio:</label>
                <div className="col-sm-1">                                 
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Domicilio"
                        name="tipoDomicilioID"
                        value={ respuesta.tipoDomicilioID === null ? 'S/T' : respuesta.tipoDomicilioID }
                    />
                </div>
            </div>

            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Calle</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="calle"
                        name="calle"
                        value={ respuesta.calle }
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Numero:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero"
                        name="numero"
                        value={ respuesta.numero }
                    />
                </div>


            </div>
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Piso</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="piso"
                        name="piso"
                        value={ respuesta.piso }
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Departamento:</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="departamento"
                        name="departamento"
                        value={ respuesta.departamento }
                    />
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Otros:</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="otros"
                        name="otros"
                        value={ respuesta.otros }
                    />
                </div>


            </div>
            <hr />
            <div className="row align-items-center">
                <div className="col">
                    <button className="btn btn-primary" type="submit">Actualizar</button>    
                </div>
            </div> 

    </div>
  )
}
