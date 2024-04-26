import { Link } from 'react-router-dom';


export const ComitenteCard = ({ 
    codigocomitente,
    codigodepositante,
    apellidos,
    nombre,
    telefonoscontacto,
    email ,
}) => {

    //const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    // const charactesByHero =  (<p>{ characters }</p>);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        {nombre}{/* <img src={ heroImageUrl } className="card-img" alt={ superhero } /> */}
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ apellidos }</h5>
                            <p className="card-text">{ nombre }</p>

                            {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } 
                            <CharactersByHero characters={ telefonoscontacto } alter_ego={ email } />
                            */}
                            <p className="card-text">
                                <small className="text-muted">{ codigodepositante }</small>
                            </p>

{/*                             <Link to={`/hero/${ id }`}>
                                Más..
                            </Link> */}

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}