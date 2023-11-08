import { EjemploProps1, EjemploProps2, EjemploProps3 } from "../componentes/props";

const nombre2 = 'manuel'
const frutas = ['manzana', 'pera', 'naranja', 'banana']
const verduras = ['choclo', 'zapallo', 'zanahoria']

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

        </div>
    )
}

export default Ejemplo01;