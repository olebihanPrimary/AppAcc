import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string' 
import styled from "styled-components";


import { getHeroesByName } from '../helpers'; 
import { AccionistasNavBar } from './AccionistasNavBar';
import { useForm } from '../hooks/useForm';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

   const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0; 


  const { searchText, onInputChange } = useForm({
    searchText: q
  }); 


  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }


  return (
    <Container>
      <AccionistasNavBar />

      {/* <h1>Search</h1>  */}
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Buscar</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="accionista a buscar"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-3">
                Buscar
              </button>
            </form>
          </div>
          </div>
          <div className="row">

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Buscar Accionista
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No existe <b>{ q }</b>
            </div>


             <h1>Listado de accionistas resultante</h1>

          </div>
      </div>
      

    </Container>
  )
}
const Container =styled.div`
   height:100vh;
   margin:20px;
`
