import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { VarContext } from '../App';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

export const FormularioPadronXLSX  = ({respuesta}) => {
/*     console.log('previo al undefine')
    console.log(JSON.stringify(respuesta))

    const {  numeroAccionista, numeroDepositanteCVSA,alycLegajo,cuitLegajo,
        nombreLegajo,tipoPersonaLegajo,categoriaLegajo,categoriaReporteESG,
        nacionalidadLegajo,grupoLegajo,mail1Legajo,personaContactoAsamblea,
        mail2Legajo,mail3Legajo,telefonoLegajo,localidadLegajo,provinciaLegajo,
        paisLegajos} = JSON.stringify(respuesta); 
        /* const {respuesta} = respuesta; */

        //console.log("REspuesta "+respuesta.numeroAccionista); 

        const [formState, setFormState] = useState({respuesta});

        const {  numeroAccionista, numeroDepositanteCVSA,alycLegajo,cuitLegajo,
            nombreLegajo,tipoPersonaLegajo,categoriaLegajo,categoriaReporteESG,
            nacionalidadLegajo,grupoLegajo , personaContactoLegajo, mail1Legajo ,personaContactoAsamblea,
            mail2Legajo,mail3Legajo,telefonoLegajo, domicilioLegajo, localidadLegajo,provinciaLegajo,
            paisLegajo, tenencia} = formState;

            /* console.log(respuesta); */
            

            const [ resultado , setResultado ] = useState();

            useEffect(() => {
                if (resultado != null)
                    {
                console.log(resultado.codigo);
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
    
/*                  console.log(name);
                 console.log(value);  */
    
                setFormState({
                    ...formState,
                    [ name ]: value
                });
            }         
             
            
            const varUrl = useContext(VarContext);
            /* console.log(varUrl);  */     
            
            const handleSubmit = async ( event ) => {

                event.preventDefault();
        
          
                 if ( numeroAccionista == 'Código') {
        
                    console.log('No va a API');
        
                 }
                 else {

                    console.log("Actualizando intentando")
                   /*  'https://localhost:32768/api/Comitentes/update' */
                   console.log(JSON.stringify(formState));

                   console.log(varUrl)

                    const resultado = await fetch(`https://${varUrl}/api/PadronXLSX/update`, 
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

            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Número Accionista:</label>
                <div className="col-sm-3">
                <input readOnly
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Número Accionista"
                    name="numeroAccionista"
                    value={ numeroAccionista !== null ?  numeroAccionista : '-'}
                    onChange={ onInputChange }
                />
                </div>
            </div>

            <div className="row align-items-center"> 
  
                <label className="col-sm-2 col-form-label col-form-label-sm">Nro Depositante CVSA</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Nro Depositante"
                        name="numeroDepositanteCVSA"
                        value={ numeroDepositanteCVSA !== null ? numeroDepositanteCVSA : '-' }
                        onChange={ onInputChange }

                    />

 
                </div>

            
                <label className="col-sm-2 col-form-label col-form-label-sm">CUIT:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="CUIT Legajo"
                        name="cuitLegajo"
                        value={ cuitLegajo }
                        onChange={ onInputChange }
                    
                    />
                </div>

            </div>

            <div className="row ">

                <label className="col-sm-2 col-form-label col-form-label-sm">ALYC:</label>

                 <div className="col-sm-8">
                 <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="ALYC"
                        name="alycLegajo"
                        value={ alycLegajo }
                        onChange={ onInputChange }
                    
                    />
                </div>
                    
            </div>
            
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo Persona:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Persona"
                        name="tipoPersonaLegajo"
                        value={ tipoPersonaLegajo }
                        onChange={ onInputChange }
                    
                    />
                </div>

                <label className="col-sm-2 col-form-label col-form-label-sm">Categoría:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Categoría"
                        name="categoriaLegajo"
                        value={ categoriaLegajo  }
                        onChange={ onInputChange }
                    
                    />
                </div>


            </div>    
 
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Grupo:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Grupo"
                        name="grupoLegajo"
                        value={ grupoLegajo  }
                        onChange={ onInputChange }
                    />
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Cat.Reporte ESG:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Cat.Reporte ESG"
                        name="categoriaReporteESG"
                        value={ categoriaReporteESG  }
                        onChange={ onInputChange }
                    />
                </div>
            </div>        
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tenencia:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2 bg-info"
                        placeholder="Tenencia"
                        name="tenencia"
                        value={ tenencia }
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
                        name="nombreLegajo"
                        value={ nombreLegajo }
                        onChange={ onInputChange }
                    
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Persona Contacto:</label>
                <div className="col-sm-8">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Persona Contacto"
                        name="personaContactoLegajo"
                        value={ personaContactoLegajo }
                        onChange={ onInputChange }
                    />
                </div>
            </div> 

            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Contacto Asamblea:</label>
                <div className="col-sm-8">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Contacto Asamblea"
                        name="personaContactoAsamblea"
                        value={ personaContactoAsamblea }
                        onChange={ onInputChange }
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

                    <input 
                        type="email" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Mail 1"
                        name="mail1Legajo"
                        value={ mail1Legajo }
                        onChange={ onInputChange }
                       
                    /> 
                </div>
            </div>
            <div className="row align-items-center">

                <label className="col-sm-2 col-form-label col-form-label-sm">Mail 2:</label>
                <div className="col-sm-8">                          
                    <input 
                        type="email" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Mail 2"
                        name="mail2Legajo"
                        value={ mail2Legajo  }
                        onChange={ onInputChange }
                    />
                </div>


            </div>      
            <div className="row align-items-center">

            <label className="col-sm-2 col-form-label col-form-label-sm">Mail 3:</label>
            <div className="col-sm-8">                          
                <input 
                    type="email" 
                    className="form-control form-control-sm mt-2"
                    placeholder="Mail 3"
                    name="mail3Legajo"
                    value={ mail3Legajo }
                    onChange={ onInputChange }
                />
            </div>


            </div>   
           

            <hr />
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Teléfono:</label>
                <div className="col-sm-8">                                 
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="teléfono"
                        name="telefonoLegajo"
                        value={ telefonoLegajo  }
                        onChange={ onInputChange }
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Domicilio:</label>
                <div className="col-sm-8">                                 
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Domicilio"
                        name="domicilioLegajo"
                        value={ domicilioLegajo  }
                        onChange={ onInputChange }
                    />
                </div>
            </div>

            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Pais</label>
                <div className="col-sm-2">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="paisLegajo"
                        name="paisLegajo"
                        value={ paisLegajo }
                        onChange={ onInputChange }
                    />
                </div>
            </div>         
            <div className="row align-items-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Provincia:</label>
                <div className="col-sm-8">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="provincia"
                        name="provinciaLegajo"
                        value={ provinciaLegajo  }
                        onChange={ onInputChange }
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
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="localidad"
                        name="localidadLegajo"
                        value={ localidadLegajo }
                        onChange={ onInputChange }
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
            <hr />
            <div className="row align-items-center">
                <div className="col">
                    <button className="btn btn-primary" type="submit">Actualizar</button>    
                </div>
            </div> 


    </form>
  )
}
