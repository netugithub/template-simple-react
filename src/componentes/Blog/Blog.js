import "./Blog.css"
import foto1 from "../../img/nocheDeBrujas.jpg";
import foto2 from "../../img/educacion.jpg"
import Footer from "../Footer";



const Blog = () => {
    return ( 
       <div className="fondoBlog mt-4"> 
                <div className= "container bg-light pt-5 contenido">
                    <h2>Episodio "Especial de Noche de Brujas VII", Octubre 27, 1996 </h2>
                    <img src={foto1}  alt="fotobrujas"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo veniam mollitia quidem perferendis, nulla aspernatur possimus numquam a, necessitatibus qui neque? Doloribus provident officia nostrum libero repudiandae perspiciatis dolorum.
                    Voluptatibus ipsam perferendis est eaque. Quas magni sapiente molestias quaerat eos maxime nam magnam impedit, ea eligendi dolores soluta, laudantium eveniet ipsa dolore incidunt aut? Distinctio veritatis cum dicta porro!
                    Illo atque quos veniam neque molestiae architecto voluptates iure aliquam, rerum quam provident cum libero iusto eaque veritatis quo autem, ipsa distinctio. Accusamus, neque temporibus. Deserunt quos quae magni dolor.</p>

                    <h2>Episodio "Lucha educativa", Abril 16, 1995.</h2>
                    <img src={foto2}  alt="educacion"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo veniam mollitia quidem perferendis, nulla aspernatur possimus numquam a, necessitatibus qui neque? Doloribus provident officia nostrum libero repudiandae perspiciatis dolorum.
                    Voluptatibus ipsam perferendis est eaque. Quas magni sapiente molestias quaerat eos maxime nam magnam impedit, ea eligendi dolores soluta, laudantium eveniet ipsa dolore incidunt aut? Distinctio veritatis cum dicta porro!
                    Illo atque quos veniam neque molestiae architecto voluptates iure aliquam, rerum quam provident cum libero iusto eaque veritatis quo autem, ipsa distinctio. Accusamus, neque temporibus. Deserunt quos quae magni dolor.</p>
            
                </div>
               
        </div>
     );
}
 
export default Blog;