import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Header />
      <BrowserRouter>
      <Nav/>
      <Routes>
        {/* aca vamos a declarar todas las rutas */}
        {/* <Route path="/" element={nombredelcomponente}></Route> */}
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
