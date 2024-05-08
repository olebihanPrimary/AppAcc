import React from 'react'

export const FormularioPadronXLSX = ({respuesta}) => {
    console.log('previo al undefine')
    console.log(JSON.stringify(respuesta))

    const {  numeroAccionista, numeroDepositanteCVSA,alycLegajo,cuitLegajo,
        nombreLegajo,tipoPersonaLegajo,categoriaLegajo,categoriaReporteESG,
        nacionalidadLegajo,grupoLegajo,mail1Legajo,personaContactoAsamblea,
        mail2Legajo,mail3Legajo,telefonoLegajo,localidadLegajo,provinciaLegajo,
        paisLegajos} = JSON.stringify(respuesta); 
        /* const {respuesta} = respuesta; */

        console.log("REspuesta "+respuesta.numeroAccionista);
    
  return (
    
    <div>

            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Número Accionista:</label>
                <div className="col-sm-3">
                <input readOnly
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Número Accionista"
                    name="numeroAccionista"
                    value={ respuesta.numeroAccionista === null ? "Número": respuesta.numeroAccionista }
                />
                </div>
            </div>

            <div className="row align-items-center"> 
  
                <label className="col-sm-2 col-form-label col-form-label-sm">Nro Depositante CVSA</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Nro Depositante"
                        name="numeroDepositanteCVSA"
                        value={ respuesta.numeroDepositanteCVSA }

                    />

 
                </div>

            
                <label className="col-sm-2 col-form-label col-form-label-sm">CUIT:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="CUIT Legajo"
                        name="cuitLegajo"
                        value={ respuesta.cuitLegajo }
                    
                    />
                </div>

            </div>

            
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Persona:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Persona"
                        name="tipoPersonaLegajo"
                        value={ respuesta.tipoPersonaLegajo }
                    
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Categoría:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Categoría"
                        name="categoriaLegajo"
                        value={ respuesta.categoriaLegajo }
                    
                    />
                </div>


            </div>    
 
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Grupo:</label>
                <div className="col-sm-3">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Grupo"
                        name="grupoLegajo"
                        value={ respuesta.grupoLegajo }
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
                        value={ parseFloat('0').toFixed(2) }
                    
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
                        name="nombreLegajo"
                        value={ respuesta.nombreLegajo }
                    
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Contacto Asamblea:</label>
                <div className="col-sm-8">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Contacto Asamblea"
                        name="personaContactoAsamblea"
                        value={ respuesta.personaContactoAsamblea }
                    />
                </div>
            </div>        
            <div className="row align-items-center">

                <label className="col-sm-2 col-form-label col-form-label-sm">Mail 1:</label>
                <div className="col-sm-8">

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
                        placeholder="Mail 1"
                        name="mail1Legajo"
                        value={ respuesta.mail1Legajo === null ? '-': respuesta.mail1Legajo}
                       
                    /> 
                </div>
            </div>
            <div className="row align-items-center">

                <label className="col-sm-2 col-form-label col-form-label-sm">Mail 2:</label>
                <div className="col-sm-8">                          
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Mail 2"
                        name="mail2Legajo"
                        value={ respuesta.mail2Legajo }
                    />
                </div>


            </div>      
            <div className="row align-items-center">

            <label className="col-sm-2 col-form-label col-form-label-sm">Mail 3:</label>
            <div className="col-sm-8">                          
                <input readOnly
                    type="text" 
                    className="form-control form-control-sm mt-2"
                    placeholder="Mail 3"
                    name="mail3Legajo"
                    value={ respuesta.mail3Legajo }
                />
            </div>


            </div>   
           

            <hr />
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Teléfono:</label>
                <div className="col-sm-8">                                 
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="teléfono"
                        name="telefonoLegajo"
                        value={ respuesta.telefonoLegajo === null ? 'S/T' : respuesta.telefonoLegajo }
                    />
                </div>
            </div>


            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Pais</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="pais"
                        name="paisLegajo"
                        value={ respuesta.paisLegajos }
                    />
                </div>
            </div>         
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Provincia:</label>
                <div className="col-sm-8">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="provincia"
                        name="provincia"
                        value={ respuesta.provinciaLegajo }
                    />
                </div>
    {/*             <label className="col-sm-2 col-form-label col-form-label-sm">cod.Postal:</label>
                <div className="col-sm-2">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="codPostal"
                        name="codPostal"
                        value={ respuesta.c_POS }
                    />
                </div> */}


            </div>               
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Localidad</label>
                <div className="col-sm-6">
                    <input readOnly
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="localidad"
                        name="loscalidadLegajo"
                        value={ respuesta.localidadLegajo }
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




    </div>
  )
}
