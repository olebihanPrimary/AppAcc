import styled from "styled-components";

export const AccionistasSelect = ({opcion}) => {
    console.log({opcion})
  return (
    <Container>
    <>
    <div className="row">

        <div className="col">

            <button className='btn btn-primary' onClick={ opcion = 0}> Lista </button>

        </div>
        <div className="col">

            <button className='btn btn-primary' onClick={ opcion = 1}> Formulario </button>

        </div>
        <div className="col">

            <button className='btn btn-primary' onClick={ opcion = 2}> Buscar </button>

        </div>
    </div>

    
    
    </>
    </Container>
  )
}

const Container =styled.div`
   height:10vh;
   margin: 10px 10px;
`
