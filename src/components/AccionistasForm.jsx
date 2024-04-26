import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Message } from "./Messaje";
import { AccionistasNavBar } from "./AccionistasNavBar";


export const AccionistasForm = () => {

    const formInicial = {
        codigoAccionista: '',
        tipoRegistroDatoID: 1,
        lugarRegPubComercio: '', 
        numeroImpuestoGanancias: '', 
        tipoCuentaID: 1,
        UsuarioModifica: 'OLB', 
        tipoPersonaID: 1,
        tipoDocumentoID: 1,
        numeroDocumento: '',        
        nombre:'',
        apellidos:'',
        nacionalidadID: 1,
        telefonoContacto: '',
        email: '',
        tipoDomicilioID: 1,
        calle: '',
        numero: '',
        piso: '',
        departamento: '',
        otros: '',
        localidadID: 1
    };
    const [formState, setFormState] = useState(formInicial);

    const [status , setStatus] = useState(null);

    const [response, setResponse] = useState(null); 

    const limpiarFormulario = () => {

        setFormState(formInicial);

    }    

    const { codigoAccionista, 
        lugarRegPubComercio, numeroImpuestoGanancias, tipoCuentaID,
        UsuarioModifica, tipoPersonaID, tipoDocumentoID, numeroDocumento, 
        nombre,apellidos, nacionalidadID, telefonoContacto ,email ,
        tipoDomicilioID, calle, numero, piso, departamento, otros, localidadID} = formState;


        
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
      
        const url = 'https://localhost:32768/api/Accionistas';
      
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
          
        <AccionistasNavBar/>
                <>
            <h3 className="mt-3">Formulario Accionistas</h3> 
            <hr />
            <form onSubmit={handleSubmit}>
            <div className="row">
                <label className="col-sm-2 col-form-label col-form-label-sm">Cód. Accionista:</label>
                <div className="col-sm-3">
                <input 
                    type="text" 
                    className="form-control form-control-sm"
                    placeholder="Codigo Accionista"
                    name="codigoAccionista"
                    value={ codigoAccionista }
                    onChange={ onInputChange }
                />
                </div>
            </div>

            <div className="row align-items-center">

                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo registro:</label>
                <div className="col-sm-3">

                    <select className="form-select form-select-sm mt-2" name="tipoRegistroDatoID" id="exampleSelect"
                        onChange={ onInputChange } defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" disabled>Seleccionar</option>
                        <option value={ '1' }>Titular</option>
                        <option value={ '2' }>Condominio</option>

                    </select>                    

                    {/* <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Documento"
                        name="tipoDocumento"
                        value={ tipoDocumento }
                        onChange={ onInputChange }
                    /> */}
                </div>
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo de cuenta:</label>
                <div className="col-sm-3">                          
                <select className="form-select form-select-sm mt-2" name="tipoCuentaID" id="exampleSelect"
                        onChange={ onInputChange } defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" disabled>Seleccionar</option>
                        <option value={ '3' }>Normal</option>
                        <option value={ '4' }>Conjunta</option>
                        <option value={ '5'}>Condominio</option>

                    </select>     
                </div>


            </div>  

                        
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Lugar Registro Público:</label>
                <div className="col-sm-3">
                    <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Lugar registro Público"
                        name="lugarRegPubComercio"
                        value={ lugarRegPubComercio }
                        onChange={ onInputChange }
                    />
                </div>



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
            <hr />
            <div className="row align-items-center"> 
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo de persona:</label>
                <div className="col-sm-3">
                    <select className="form-select form-select-sm mt-2" name="tipoPersonaID" id="TipoPersonaIDSelect"
                        onChange={ onInputChange } defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" disabled>Seleccione Opción</option>
                        <option value={ '1' }>Física</option>
                        <option value={ '2' }>Jurídica</option>
                        <option value={ '3'}>Otros</option>

                    </select>        
                    {/* <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Persona ID"
                        name="tipoPersonaID"
                        value={ tipoPersonaID }
                        onChange={ onInputChange }
                    /> */}
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

                    <select className="form-select form-select-sm mt-2" name="tipoDocumentoID" id="exampleSelect"
                        onChange={ onInputChange } defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" disabled>Seleccione Opción</option>
                        <option value={ '1' }>DNI</option>
                        <option value={ '2' }>CUIT</option>
                        <option value={ '3'}>PASAPORTE</option>

                    </select>                    

                    {/* <input 
                        type="text" 
                        className="form-control form-control-sm mt-2"
                        placeholder="Tipo Documento"
                        name="tipoDocumento"
                        value={ tipoDocumento }
                        onChange={ onInputChange }
                    /> */}
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
                        name="telefonoContacto"
                        value={ telefonoContacto }
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
                <div className="col-sm-2">    
                    <select className="form-select form-select-sm mt-2" name="tipoDomicilioID" id="TipoDomicilioIDSelect"
                        onChange={ onInputChange } defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" disabled>Seleccione Opción</option>
                        <option value={ '1' }>Comprimido</option>
                        <option value={ '2' }>Separado</option>
                        

                    </select>                                
                    
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
                    <button className="btn btn-primary" type="submit">Enviar</button>    
                </div>
            </div>          
            <hr />

            
            { response && 
                <div className="row">
                    <div className="alert alert-success" role="alert">
                         Accionista: {response.codigoAccionista} {response.apellidos} {response.nombre} ingresado con éxito.
                       {/* <small> { JSON.stringify(response, null,2)  }</small>   */}

                    </div>
                    
                </div>}     

            </form>
        </>
        </Container>
    )
}

const Container =styled.div`
   height:150vh;
   margin:20px;
`
