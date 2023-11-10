import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/ejemplo01.js';
import Ejemplo02 from './pages/ejemplo02.js';
import Mapa from './pages/mapa.js';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Header />
      <BrowserRouter>
      <Nav/>
      <Routes>
        {/* aca vamos a declarar todas las rutas */}
         <Route path="/" element={<HomePage />}></Route> 
         <Route path="/ejemplo01" element={<Ejemplo01 />}></Route> 
         <Route path="/ejemplo02" element={<Ejemplo02 />}></Route> 
         <Route path="/ejemplo03" element={<Mapa />}></Route> 
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
