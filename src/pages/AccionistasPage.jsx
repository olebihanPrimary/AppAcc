import styled from "styled-components";
import { AccionistasForm } from "../components/AccionistasForm";
import { MdRowing } from "react-icons/md";
import { useState } from "react";
import { AccionistasLista } from "../components/AccionistasLista";
import { AccionistasNavBar } from "../components/AccionistasNavBar";

export const AccionistasPage = () => {

  const [selectPage, setSelectPage] = useState(0);

  const onSelectPage = (opcion) => {
    setSelectPage(opcion);
    console.log(selectPage);
  }
  
  return (
    <Container>
{/*         <div className="row mt-2 d-flex justify-content-start">

              <div className="col">
                  <button className='btn btn-primary' onClick={() => onSelectPage(0)}> Lista </button>
              </div>
              <div className="col">
                  <button className='btn btn-primary' onClick={ () => onSelectPage(1)}> Formulario </button>
              </div>
              <div className="col">
                  <button className='btn btn-primary' onClick={ () => onSelectPage(2)}> Buscar </button>
              </div>

        </div> */}

        

        <div className="row">
          <div className="col">

            <AccionistasForm/>          
              
          </div>
        </div>
    </Container>
    
  )
}
const Container =styled.div`
   height:100vh;
   margin-left:20px
`
