import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal} from 'reactstrap';
import './styleComponeteForm.css';

const ComponenteForm = ({
                            onSubmit,
                            onEdit,
                            estado,
                            matricula,
                            nombre,
                            carrera,
                            fotoUrl,
                            setMatricula,
                            setNombre,
                            setCarrera,
                            setFotoUrl
                        }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const enviarFoto = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setFotoUrl(url);
    };
    const guardar = (event) => {
        if (estado.boton === "guardar") {
            event.preventDefault();
            onSubmit({matricula, nombre, carrera, fotoUrl});
        } else if (estado.boton === "editar") {
            event.preventDefault();
            onEdit({matricula, nombre, carrera, fotoUrl});
        }
        setMatricula('');
        setNombre('');

    };
    return (<>
            <div className="center-container">
                <Button color="danger" onClick={toggle}>
                    {estado.boton}
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <Form onSubmit={guardar} className="formulario">
                        <h1 className="titulo">{estado.titulo}</h1>
                        <FormGroup>
                            <Label>
                                Matricula:
                                <Input
                                    type="text"
                                    value={matricula}
                                    required={true}
                                    onChange={(event) => setMatricula(event.target.value)}
                                />
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Nombre:
                                <Input
                                    type="text"
                                    value={nombre}
                                    required={true}
                                    onChange={(event) => setNombre(event.target.value)}
                                />
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Carrera:
                                <Input
                                    type="select"
                                    required={true}
                                    value={carrera}
                                    onChange={(event) => setCarrera(event.target.value)}>
                                    <option value="Ingeniería Civil">Ingeniería Civil</option>
                                    <option value="Ingeniería Electrica">Ingeniería Electrica</option>
                                    <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                                    <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                                    <option value="Ingeniería Química">Ingeniería Química</option>
                                    <option value="IngLog">Ingeniería Química</option>
                                    <option value="Ingeniería en Sistemas Computacionales">Ingeniería en Sistemas
                                        Computacionales
                                    </option>
                                    <option value="Licenciatura en Administración">Licenciatura en Administración</option>
                                    <option value="Ingeniería en Tecnologias de la Información y Comunicaciones">Ingeniería
                                        en
                                        Tecnologias de la Información y Comunicaciones
                                    </option>
                                </Input>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="foto">Foto:</Label>
                            <Input
                                type="file"
                                name="foto"
                                id="foto"
                                required={true}
                                onChange={enviarFoto}
                            />
                        </FormGroup>
                        <Button type="submit" color="primary">{estado.boton}</Button>
                    </Form>
                </Modal>

            </div>
        </>);
};

export default ComponenteForm;