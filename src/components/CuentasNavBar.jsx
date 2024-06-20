import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchContext } from '../context/SearchContext';



export const CuentasNavBar = () => {

        
    const navigate = useNavigate();

    const { stringBuscar, setStringBuscar} = useContext(SearchContext);
    const ResetSearchText = ()=>{
        setStringBuscar('buscar');
    }

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        onClick={()=>{ResetSearchText()}}
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/cuentaslista"
                    >
                        Lista
                    </NavLink>

                    <NavLink 
                        onClick={()=>{ResetSearchText()}}
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/cuentasform"
                    >
                        Formulario
                    </NavLink>
                    
                    <NavLink 
                        onClick={()=>{ResetSearchText()}}                    
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/searchpagecuentas"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   

                </ul>
            </div>
        </nav>
    )
}

const Container =styled.div`
   height:100vh;
   margin:20px;
   font-size: 16px;
`