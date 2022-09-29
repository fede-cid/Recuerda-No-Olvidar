import React from "react";
import '../css/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Slide from 'react-reveal/Slide';

function Tarea ({id,  texto , completada, completarTarea, eliminarTarea }) {



    return (
        <Slide bottom  cascade>
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto" onClick={()=> completarTarea(id)}>
                {texto}  
            </div>
            <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono'/>
            </div>
       </div></Slide> 
    );
}

export default Tarea