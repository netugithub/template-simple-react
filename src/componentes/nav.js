import React from 'react';
import foto from "../img/header-simpsons.gif";
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src={foto} alt="logoSimpsons"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li class="nav-item botonesNav">
                        <Link to="/" >Inicio</Link>
                        </li>
                        <li class="nav-item botonesNav">
                        <Link to="/blog" >Blog</Link>
                        </li>
                        <li class="nav-item botonesNav">
                        <Link to="/formulario" >Contacto</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-danger" type="submit">Busqueda</button>
                    </form>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Nav ;