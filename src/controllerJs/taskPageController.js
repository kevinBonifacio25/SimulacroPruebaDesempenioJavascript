

import { handleNavigation } from "../router.js";

export function initTaskPage(){

    const btnAgregarTarea = document.getElementById("agregarTarea");
    btnAgregarTarea.addEventListener("click", function(){
        handleNavigation("/crear")
    })

    const agregarTareas = document.getElementById("tasksTableBody")

    async function obtenerTareas(){
        try {
            const responseTraerTareas = await fetch("http://localhost:3000/tasks")

            const tareas = await responseTraerTareas.json()
            console.log(tareas)

            renderizarTareas(tareas)

        } catch (error) {
            alert("error al obtener tareas: ", error)
        }
    }
    //funcion para renderizar tareas en la tabla
    function renderizarTareas(tareas){
        agregarTareas.innerHTML = ""
        
        tareas.forEach(tarea => {
            const row = document.createElement("tr")
            row.innerHTML = `
            <td>${tarea.titulo}</td>
            <td>${tarea.descripcion}</td>
            <td>${tarea.fechaLimite}</td>
            <td>${tarea.prioridad}</td>
            `
            agregarTareas.appendChild(row)
        })
            
        
    }
    document.addEventListener("DOMContentLoaded", obtenerTareas)
}
