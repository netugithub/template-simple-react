import React from 'react';
import foto3 from "../img/homer.jpg";
import foto4 from "../img/maggie.jpg";
import foto5 from "../img/bart.jpg";



class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className= "fondoCards d-flex">
                
                <div className=" card1">
                    <div class="card" style={{width: "18rem"}}>
                        <img src={foto4} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Maggie</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Leer mas...</a>
                        </div>
                    </div>
                </div>

                 

                <div className=" card2">
                    <div class="card" style={{width: "18rem"}}>
                        <img src={foto3} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <h5 class="card-title">Homero</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Leer mas...</a>
                        </div>
                    </div>
                </div>

                

                <div className=" card3">
                    <div class="card" style={{width: "18rem"}}>
                        <img src={foto5} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Bart</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Leer mas...</a>
                        </div>
                    </div>
                </div>

            </div>

         );
    }
}
 
export default Cards;