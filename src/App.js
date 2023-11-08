import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/ejemplo01.js';

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
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
