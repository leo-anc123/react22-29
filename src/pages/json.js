import alumnos from '../data/alumnos.json'

const Json = () => {
     return (
        <>
        <h2>Ejemplo cargas de datos Json</h2>
        <ul>
            {alumnos.map(alumno => (
                <li>{alumno.nombre} {alumno.apellido} ({alumno.edad})</li>
            ))}
        </ul>

        </>
     )
};

export default Json;