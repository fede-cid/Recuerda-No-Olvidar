import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../css/listaDeTareas.css'
import Tarea  from "./Tareas";

function ListaDeTareas(){

    const [tareas, setTareas] = useState([])
  
    const agregarTarea = tarea => {
        console.log(tarea)
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

        const completarTarea = id => {
            const tareasActualizadas = tareas.map(tarea => {
                if(tarea.id === id){
                    tarea.completada = !tarea.completada;
                }
                return tarea
            });
            setTareas(tareasActualizadas);
        };
    return (
        <>
         <TareaFormulario onSubmit={agregarTarea} />
         <div className='tareas-lista-contendor'>
            {
               tareas.map((tarea)=>
               <Tarea
               key={tarea.id}
               id={tarea.id}
               texto={tarea.texto}
               completada={tarea.completada}
               eliminarTarea={eliminarTarea}
               completarTarea={completarTarea}
               />
               )
            }
         </div>
        </>
    )
}

export default ListaDeTareas