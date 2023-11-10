import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4,EjemploProps5 } from "../componentes/props";

const nombre2 = 'manuel'
const frutas = ['manzana', 'pera', 'naranja', 'banana']
const verduras = ['choclo', 'zapallo', 'zanahoria']

const mostrarValor = valor => {
    console.log(valor);
}

const Ejemplo01 = (props) => {

    return (
        <div>
        <h2>Ejemplo de Props</h2>
        {/* Propiedad simple y reutilizable */}
        <EjemploProps1 nombre='Leandro' />
        <EjemploProps1 nombre={nombre2} />
        {/* Listado de elementos - 11pdf */}
        <EjemploProps2 elementos={frutas} />
        <EjemploProps2 elementos={verduras}/> 
        {/* Multiples propiedades desctucuring */}
        <EjemploProps3 titulo="Lionel Messi" subtitulo="Messi gano otro balon de oro" cuerpo="kjasbjbdakjsbdjasbjsabajsbdkjas" />
        {/* si o si se necesita pasarle un manejador --> mostrarValor */}
        <EjemploProps4 cambiarValor={mostrarValor}/>

        <EjemploProps4 />

        <EjemploProps4 cambiarValor= {() => {}}/>
        
        <EjemploProps5 />
        // Se muestra el valor en la consola
        <EjemploProps5 eventoClick={mostrarValor} />

        </div>
    )
}

export default Ejemplo01;