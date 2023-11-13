import '../css/api.css'
import { useEffect, useState } from 'react';

const Api = (props) => {


    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true);
            const res = (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false)
        }
        cargarDatos();
    }, []);
    // fetch --> para traer los datos nativos de JS. Tambien se puede utilizar axios(dependencias)

    return (
        <>
            <h2> Datos Api</h2>

            {cargando ? <p> cargando datos...</p> : (
                <div className="personajes">

                    <div className="personaje">
                        <h4>Nombre del personaje</h4>
                        <div className="ficha">
                            <div className="foto">
                                <img src="https://fakeimg.pl/100x100" />
                            </div>
                            <div className="datos">
                                <h6>Especie: humano o no</h6>
                                <h6>Vivo: humano o no</h6>
                            </div>
                        </div>
                    </div>

                </div>
                )};
            {/* Termina el operador ternario */}
            
        </>

    )
};

export default Api;