import styled from "styled-components";
import { useEffect, useRef, useState } from 'react';
import {  VarContext } from "../App";
import { useContext } from "react";
import { HotTable, HotColumn, HotTableClass } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css";

// ejecutar para obtener todas las funciones de handsontable
registerAllModules();
registerLanguageDictionary(esMX);


import { CuentasNavBar } from "./CuentasNavBar";
import { Link, NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { SearchContext } from "../context/SearchContext";
import { useForm } from "../hooks/useForm";
import { current } from "@reduxjs/toolkit";

export const  CuentasLista =  () => {

    const { stringBuscar, setStringBuscar} = useContext(SearchContext);
    const { searchText, onInputChange } = useForm({
      searchText: stringBuscar
    });

  
    const [data, setData] = useState([]);  

    
    const url = useContext(VarContext);

    const [resultado, setResultado] = useState('');
    
    const hotTableComponent = useRef(null);


    /* const [endPoint, setEndPoint ] = useState(`https://${url}/api/PadronXLSX`) */
    const [endPoint, setEndPoint ] = useState(`https://${url}/api/Cuentas`)
    const navigate = useNavigate();

    const handleSubmit = async (event) => {

      event.preventDefault();
  
       console.log(`valor searchText ${searchText}`);  

        if ( searchText === null || searchText === ''){
          
          setEndPoint(`https://${url}/api/Cuentas`)

        } else {

          setEndPoint(`https://${url}/api/Cuentas/codigoCuenta/${encodeURIComponent(searchText)}`)

         
        }
      
      }    

      const handleClick = (event, coords, td) => {
        console.log('handleclick')
        console.log(coords.col)
        if (coords && coords.col === 0 && coords.row >= 0) { // Cambia el índice de la columna según sea necesario
          //alert(`Clic en la ${coords.col}, fila ${coords.row}`);
          const valor = hotTableComponent.current.hotInstance.getDataAtCell( coords.row, coords.col);
          console.log(coords.row)
          console.log(coords.col)
          console.log(valor);
          setStringBuscar( valor );
          navigate('../searchPageCuentas');
        }

      };
    
      const afterOnCellMouseDown = (event, coords, td) => {
        console.log('afteroncellmousedown')
        handleClick(event, coords, td);
      };

    const ActStringBuscar = (event, coords  ) => {

        console.log('String Buscar ' +stringBuscar)
        const valor = hotTableComponent.current.hotInstance.getDataAtCell( coords.row, coords.col);
        console.log(coords.row)
        console.log(coords.col)
        console.log(valor)
        setStringBuscar(valor);

        navigate('../searchPageCuentas');

    }
    
    /* const {data, isLoading} = useFetch ( 'https://localhost:32768/api/Comitentes/consultapersonas' ); */


    
      useEffect(() => {
        console.log(endPoint)
         setResultado('Cargando Padrón...'); 

         fetch(endPoint)
          .then(response => response.json())
          .then(data => {
            setData(data);
            setResultado(''); })
          .catch(error => console.error(error)); 

        return () => {
          console.log('Función de limpieza ejecutada');
        };
        //const {data, isLoading, hasError} = useFetch(`https://${url}/api/PadronXLSX`)

                
      }, [endPoint]); 

      const hotSettings = {
         afterOnCellMouseDown: afterOnCellMouseDown,
      };

/*       console.log(data) */
  
    return (
        
        <Container>
            
        <CuentasNavBar/>

        <div className="row ms-2">

            <div className="col-6">
            {/*  <h4>Búsqueda por cuenta</h4> */}
              <hr />
              <form onSubmit={ handleSubmit } className='d-flex'>
                <input 
                  type="text"
                  placeholder="búsqueda por nombre o cuenta"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange } 
                />

                <button type="summit" className="btn btn-outline-success ms-2">
                  Buscar
                </button>



              </form>
            </div>
            </div>            


            <h4 className="mt-3">Cuentas</h4> 
            <p className="text-success ms-2">{ resultado }</p>
            <hr />
            <HotTable
              ref={hotTableComponent}
              settings={hotSettings}
              language={esMX.languageCode}
              data={data}
              licenseKey="non-commercial-and-evaluation"
              colHeaders={true}
              rowHeaders={true}
              columnSorting={true}
              mergeCells={true}
              contextMenu={["row_above", "row_below"]}
              readOnly={false}
              colWidths={[200,300,100]}
              
            >
            <HotColumn className="codigoCuenta" data="codigoCuenta" title="Código Cuenta"
               />

              <HotColumn className={'htLeft'} data="nombreCuenta" title="Nombre Cuenta"/>
              <HotColumn className={'htRight'} data="tenenciaCuenta" title="Tenencia" />

              </HotTable>
 
   
        </Container>
    )
}

const Container =styled.div`
   height:200vh;
   margin:20px;
   font-size: 14px;
   color: ${(props) => props.theme.text};
   background: ${(props) => props.theme.bg};

  .bg-color {
    background-color: #d6d8db; 
  }

.table{
  font-size: 14px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
 }
   
.container-lista{
  font-size: 14px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.codigoCuenta:hover {
  background-color: #7FFFD4; /* Cambia el color de fondo al pasar el mouse por encima */
  cursor: pointer;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`