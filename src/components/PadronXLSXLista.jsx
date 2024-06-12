import styled from "styled-components";
import { useEffect, useRef, useState } from 'react';
/* import { Message } from "./Messaje";
import { PadComNavBar } from "./PadComNavBar";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { ComitenteCard } from "./ComitenteCard"; */

import {  VarContext } from "../App";
import { useContext } from "react";

import { HotTable, HotColumn, HotTableClass } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css";

// ejecutar para obtener todas las funciones de handsontable
registerAllModules();
registerLanguageDictionary(esMX);


import { PadronXLSXNavBar } from "./PadronXLSXNavBar";
import { Link, NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { SearchContext } from "../context/SearchContext";
import { useForm } from "../hooks/useForm";
import { current } from "@reduxjs/toolkit";

export const  PadronXLSXLista =  () => {

    const { stringBuscar, setStringBuscar} = useContext(SearchContext);
    const { searchText, onInputChange } = useForm({
      searchText: stringBuscar
    });

  
    const [data, setData] = useState([]);  

    
    const url = useContext(VarContext);

    const [resultado, setResultado] = useState('');
    
    const hotTableComponent = useRef(null);


  

    /* const [endPoint, setEndPoint ] = useState(`https://${url}/api/PadronXLSX`) */
    const [endPoint, setEndPoint ] = useState(`https://${url}/api/PadronXLSX/nombre/0`)
    const navigate = useNavigate();

    const handleSubmit = async (event) => {

      event.preventDefault();
  
       /* console.log(`valor searchText ${searchText}`);  */

        if ( searchText === null || searchText === ''){
          
          setEndPoint(`https://${url}/api/PadronXLSX/nombre/0`)

        } else {

          setEndPoint(`https://${url}/api/PadronXLSX/nombre/${searchText}`)

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
          navigate('../searchPagePadronXLSX');
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

        navigate('../searchPagePadronXLSX');

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
            
        <PadronXLSXNavBar/>

        <div className="row ms-2">

            <div className="col-5">
            {/*  <h4>Búsqueda por cuenta</h4> */}
              <hr />
              <form onSubmit={ handleSubmit } className='d-flex'>
                <input 
                  type="text"
                  placeholder="búsqueda por nombre"
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


            <h4 className="mt-3">Padrón Permanente</h4> 
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
              colWidths={[100,100,300,100,70, 70,100,100,100]}
              
            >
            <HotColumn className="cuitLegajo" data="cuitLegajo" title="CUIT"
               />
              <HotColumn data="categoriaLegajo" title="Categoria" />
              <HotColumn data="nombreLegajo" title="Nombre"/>
              <HotColumn data="tipoPersonaLegajo" title="Tipo"/>
              <HotColumn className={'htRight'} data="tenencia" title="Tenencia" />
              <HotColumn className={'htCenter'} data="estado" title="Estado" />
              <HotColumn className={'htCenter'} data="localidadLegajo" title="Localidad" />
              <HotColumn data="provinciaLegajo" title="Provincia" />
              <HotColumn data="paisLegajo" title="Pais" />
              </HotTable>
 
 {/*            <table className="Container ms-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                  
                    <th className="px-2" scope="col">Cuit Legajo</th>                  
                    <th className="px-2" scope="col">Nombre Legajo</th>
                    <th className="px-2" scope="col">Categoria Legajo</th>
                    <th className="px-2 text-end" scope="col" >Tenencia</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th scope="row" >{index + 1}</th>
                        

                        <td className="cuitLegajo px-2" onClick={() => ActStringBuscar(item.cuitLegajo)}>{item.cuitLegajo}</td>
                        <td className="px-2">{item.nombreLegajo}</td>
                        <td className="px-2">{item.categoriaLegajo}</td>
                        <td className="text-end">{parseFloat(item.tenencia).toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>

            </table> */}
           

             
             {/* <p>{JSON.stringify(data)}</p>  */}
             {/* <p>{ data.nombre }</p> */}

  
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

.cuitLegajo:hover {
  background-color: #7FFFD4; /* Cambia el color de fondo al pasar el mouse por encima */
  cursor: pointer;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`