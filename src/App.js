import { HashRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Blog from './componentes/Blog/Blog';
import Formulario from './componentes/Formulario/Formulario';
import HomePage from './componentes/HomePage/HomePage';
import Nav from './componentes/nav';
import Footer from './componentes/Footer';


function App() {
  return (
    <Router>
    <div >
      <nav>
        <Nav />
        
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/formulario" element={<Formulario />} />

      </Routes>
      <Footer />
    </div>
    </Router >
    
  );
}

export default App;
