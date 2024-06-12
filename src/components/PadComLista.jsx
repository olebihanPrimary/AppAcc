import styled from "styled-components";
import { useEffect, useState, useRef } from 'react';
import { Message } from "./Messaje";
import { PadComNavBar } from "./PadComNavBar";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { ComitenteCard } from "./ComitenteCard";
import { VarContext } from "../App";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {FileUpload} from "./FileUpLoad";
import { HotTable, HotColumn, HotTableClass } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css";


export const PadComLista = () => {

    const p = '';

    const { searchText, onInputChange } = useForm({
      searchText: p
    }); 
 
    const hotTableComponent = useRef(null);

    const [data, setData] = useState([]);  

    const url = useContext(VarContext);

    const { stringBuscar, setStringBuscar} = useContext(SearchContext);
    
    const [endPoint, setEndPoint ] = useState(`https://${url}/api/PadCom`)

    const navigate = useNavigate();

    const [resultado, setResultado] = useState('');



   const afterOnCellMouseDown = (event, coords, td) => {
    console.log('afteroncellmousedown')
    handleClick(event, coords, td);
  };

  const hotSettings = {
    afterOnCellMouseDown: afterOnCellMouseDown,
 };

    const handleSubmit = async (event) => {

      event.preventDefault();
  
      console.log();

        if ( searchText == null || searchText === ''){
          
          setEndPoint(`https://${url}/api/PadCom/nombre/0`)

        } else {

          setEndPoint(`https://${url}/api/PadCom/nombre/${searchText}`)

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
          navigate('../searchpagepadcom');
        }

      };

    const ActStringBuscar = (valor) => {

        console.log('String Buscar ' +stringBuscar)
        setStringBuscar(valor);

        navigate('../searchpagepadcom');

    }
    
    /* const {data, isLoading} = useFetch ( 'https://localhost:32768/api/Comitentes/consultapersonas' ); */
   

      useEffect(() => {
        setResultado('Cargando Padrón...'); 
         fetch(endPoint)
          .then(response => response.json())
          .then(data => { 
            setData(data);
            setResultado('');
            console.log(data);
          })
          .catch(error => 
            console.error(error)
          );
      }, [endPoint]); 

/*       console.log(data) */
  
    return (
        
        <Container>

            <PadComNavBar/>

            
            <div className="row ms-2">

              <div className="col-5">
               {/*  <h4>Búsqueda por cuenta</h4> */}
                <hr />
                <form onSubmit={ handleSubmit } className='d-flex'>
                  <input 
                    type="text"
                    placeholder="búsqueda por cuenta o CUIT"
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
            <hr />
            <FileUpload />

            <h4 className="mt-3">Padrón Descargas</h4> 
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
              colWidths={[100,100,100,200,200,150, 160]}
              >
              <HotColumn  className="cuit" data="cuit" title="CUIT"  />
            
              <HotColumn  data="comitente" title="Comitente"
               />
              <HotColumn  data="depositante" title="Depositante"
               />
              <HotColumn  data="nombrE_CUENTA" title="Nombre"
               />             
               <HotColumn data="denominacion" title="Denom."/>  

               <HotColumn className={'htRight'} data="tenencia" title="Tenencia"/>

               <HotColumn className={'htRight'} data="fecha" title="Fecha Descarga"/>

              </HotTable>            
 
            {/* <table className="Container ms-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th className="px-2" scope="col">Comitente</th>
                    <th className="px-2" scope="col">Depositante</th>                  
                    <th className="px-2" scope="col">CUIT</th>                  
                    <th className="px-2" scope="col">Nombre Cuenta</th>
                    <th className="px-2" scope="col">Denominación</th>
                    <th className="px-2 text-end" scope="col" >Tenencia</th>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-color" : ''}>
                        <th scope="row" >{index + 1}</th>
                        <td>{item.comitente}</td>
                        <td>{item.depositante}</td>
                        <td className="cuit"  onClick={() => ActStringBuscar(item.cuit)} >{item.cuit}</td>
                        <td>{item.nombrE_CUENTA}</td>
                        <td>{item.denominacion}</td>
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

.cuit:hover {
  background-color: #7FFFD4; /* Cambia el color de fondo al pasar el mouse por encima */
  cursor: pointer;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

`