import React from 'react';
import {Table, Button} from 'reactstrap';
import './styleListAlumns.css';
const ListAlumnos = ({estudiantes, onDelete, onEdit}) => {
    return (
        <div>
            <h2>Lista de estudiantes:</h2>
            <Table>
                <thead>
                <tr>
                    <th>Matricula</th>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Foto</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {estudiantes.map((estudiante, index) => (
                    <tr key={index}>
                        <td>{estudiante.matricula}</td>
                        <td>{estudiante.nombre}</td>
                        <td>{estudiante.carrera}</td>
                        <td>
                            <img src={estudiante.fotoUrl} alt="Foto" className="foto2"/>
                        </td>
                        <td>
                            <Button color="primary" onClick={() => onEdit(estudiante, index)}>
                                Editar
                            </Button>
                        </td>
                        <td>
                            <Button color="danger" onClick={() => onDelete(index)}>
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListAlumnos;
