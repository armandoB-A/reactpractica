import {useState} from "react";
import ListAlumnos from "./list-alumnos/ListAlumnos";
import ComponenteForm from "./my-component/ComponenteForm";

function App() {
    const [matricula, setMatricula] = useState("");
    const [nombre, setNombre] = useState("");
    const [carrera, setCarrera] = useState("Ingeniería Civil");
    const [fotoUrl, setFotoUrl] = useState("");
    const initialState={
        boton: 'guardar', titulo: 'Registo de alumnos', alumne:{}, indice:-1
    };
    const [estudiantes, setEstudiantes] = useState([]);
    const [estado, setEstado] = useState(initialState);

    const guardarE = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante]);
    };
    const borarE = (index) => {
        setEstudiantes(estudiantes.filter((_, i) => i !== index));
    };
    const onEdit = (estudiante, index) => {
        setEstado({boton: 'editar', titulo: 'Editar alumnos', alumne: estudiante, indice: index})
        setMatricula(estudiante.matricula)
        setNombre(estudiante.nombre)
        setCarrera(estudiante.carrera)
        setFotoUrl(estudiante.fotoUrl)
    }
    const edit = (estudiante) => {
        const aux = [...estudiantes];
        aux[estado.indice] = estudiante;
        setEstudiantes(aux);
        setEstado(initialState);
    }

    return (
        <div>
            <ComponenteForm
                onSubmit={guardarE}
                onEdit={edit}
                estado={estado}
                matricula={matricula} setMatricula={setMatricula}
                nombre={nombre} setNombre={setNombre}
                carrera={carrera} setCarrera={setCarrera}
                fotoUrl={fotoUrl} setFotoUrl={setFotoUrl}
            />
            <ListAlumnos estudiantes={estudiantes} onDelete={borarE} onEdit={onEdit}/>
        </div>
    );
}

export default App;