import "./Formulario.css"
import Footer from "../Footer";


const Formulario = () => {
    return ( 
        <div className="fondoContacto">
            <div className="container contenedorForm pt-5">       
                <form className=" bg-light formulario">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="example@example.com" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label ">Mensaje</label>
                        <input type="text" className="form-control mensaje" id="exampleInputPassword1"/>
                    </div>
                    
                    <button type="submit" className="btn btn-light btn-Enviar">ENVIAR</button>
                </form>
            </div>
           
        </div>

    
     );
}
 
export default Formulario;