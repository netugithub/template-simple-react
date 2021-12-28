import React from "react"
import foto1 from "../img/carrousel-1.jpg";
import foto2 from "../img/carrousel-2.jpg";
import foto3 from "../img/carrousel-3.jpg";




class Carrusel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner text-center">
                    <div class="carousel-item active">
                    <img src={foto1} class="d-block w-100" className="foto1" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={foto2} class="d-block w-100" className="foto1" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={foto3} class="d-block w-100" className="foto1" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" className="boton"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
         );
    }
}
 
export  default Carrusel ;