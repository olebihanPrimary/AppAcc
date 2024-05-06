import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";

export const PadComNavBar = () => {

    const navigate = useNavigate();

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
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/padcomlista"
                    >
                        Lista
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/padcomform"
                    >
                        Formulario
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/searchpagepadcom"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
{/*                     <span className="nav-item nav-link text-primary">
                        Fernando
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button> */}

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
