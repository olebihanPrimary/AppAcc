import React from 'react'

export const FormularioPadCom = ({respuesta}) => {
    console.log('previo al undefine')
    console.log(JSON.stringify(respuesta))

    const { tipO_REGISTRO,depositante,comitente,tipO_LINEA,conteO_CONDOMINIOS,
    coD_ESPECIE,bloqueO_ESPECIE,tenenciA_ESPECIE,tenencia,
    inV_TIPO,nombrE_CUENTA,denominacion,datO_REGISTRAL,
    nrO_REGISTRAL,lugaR_REGISTRO,cuit,tipO_DOMICILIO,
    domicilio,provincia,pais,c_POS,coD_EMISIOR} = JSON.stringify(respuesta); 
        /* const {respuesta} = respuesta; */

        console.log("REspuesta "+cuit);
    
  return (
    
    <div>

            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Comitente:</label>
                <div className="col-sm-3">
                <input readOnly
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Codigo Comitente"
                    name="comitente"
                    value={ respuesta.comitente === null ? "Código": respuesta.comitente }
                />
                </div>
            </div>

            <div className="row align-items-center"> 
  
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Registro</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo de registro"
                        name="tipoComitenteID"
                        value={ respuesta.tipO_REGISTRO }

                    />

 
                </div>

            
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Depositante:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Codigo Depositante"
                        name="codigoDepositante"
                        value={ respuesta.depositante }
                    
                    />
                </div>

            </div>

            
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Conteo Condominio:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Conteo Condominio"
                        name="conteoCondominio"
                        value={ respuesta.conteO_CONDOMINIOS }
                    
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Código Especie:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Código Especie"
                        name="codEspecie"
                        value={ respuesta.coD_ESPECIE }
                    
                    />
                </div>


            </div>    
 
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Bloqueo especie:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Bloqueo Especie"
                        name="bloqueoEspecie"
                        value={ respuesta.bloqueO_ESPECIE }
                    />
                </div>
            </div>        
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tenencia:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2 bg-info"
                        placeholder="Tenencia"
                        name="tenencia"
                        value={ parseFloat(respuesta.tenencia).toFixed(2) }
                    
                    />
                </div>
            </div>                                       


            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Nombre Cuenta:</label>
                <div className="col-sm-7">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Nombre Cuenta"
                        name="nombreCuenta"
                        value={ respuesta.nombrE_CUENTA }
                    
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Denominación:</label>
                <div className="col-sm-7">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Denominacion"
                        name="denominacion"
                        value={ respuesta.denominacion }
                    />
                </div>
            </div>        
            <div className="row align-items-center">

                <label className="col-sm-2 col-form-label col-form-label-sm">Dato Registral:</label>
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
                        placeholder="Dato Registral"
                        name="datoRegistral"
                        value={ respuesta.datO_REGISTRAL === null ? 'S/T': respuesta.datO_REGISTRAL}
                       
                    /> 
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Nro.Registral:</label>
                <div className="col-sm-3">                          
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Número Registral"
                        name="nro_registral"
                        value={ respuesta.nrO_REGISTRAL }
                    />
                </div>


            </div>      
           {/*  <div className="row align-items-center">
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
            </div>   */}

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
                <label className="col-sm-2 col-form-label col-form-label-sm">Domicilio</label>
                <div className="col-sm-6">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="domicilio"
                        name="domicilio"
                        value={ respuesta.domicilio }
                    />
                </div>

                {/* <label className="col-sm-2 col-form-label col-form-label-sm">Numero:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Numero"
                        name="numero"
                        value={ respuesta.numero }
                    />
                </div> */}


            </div>
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Pais</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="pais"
                        name="pais"
                        value={ respuesta.pais }
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Provincia:</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="provincia"
                        name="provincia"
                        value={ respuesta.provincia }
                    />
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">cod.Postal:</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="codPostal"
                        name="codPostal"
                        value={ respuesta.c_POS }
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
