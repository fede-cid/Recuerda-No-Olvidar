import React, {useState} from "react";
import '../css/tareaFormulario.css';
import  {v4 as uuidv4} from 'uuid';
import Flip from 'react-reveal/Flip';


function TareaFormulario(props){

    const [input, setImput] = useState('')

    const manejarCambio = e => {
        setImput(e.target.value);
        
    };

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)
    };



    return(<Flip bottom  cascade>
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input
            className="tarea-input"
            type='text'
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form></Flip >
    );

}

export default TareaFormulario;