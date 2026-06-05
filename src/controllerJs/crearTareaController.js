
import { handleNavigation } from "../router.js";

export function initCrearTask(){

    const form = document.getElementById("taskForm");
    
    form.addEventListener("submit", async(e) =>{
        e.preventDefault();

        const titulo = document.getElementById("tituloTarea").value.trim()
        const descripcion = document.getElementById("descripcionTask").value.trim()
        const fechaLimite = document.getElementById("fechaLimiteTask").value.trim()
        const prioridad = document.getElementById("prioridadTask").value.trim()

        if (!titulo || !descripcion || !fechaLimite || !prioridad){
            alert("todos los campos son obligatorios")
            return
        }

        const tarea ={
            titulo,
            descripcion,
            fechaLimite,
            prioridad,
        
        }
        try {
            const respuestaTarea = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tarea),
            }
        )

        const dataTarea = await respuestaTarea.json();
        console.log("Tarea Guardada ",dataTarea);
        form.reset();
        



    } catch(error){
        alert("error al guardar: ", error)
    }

    handleNavigation("/listar")
    })

    //funcion para redirigir hacia listar
    const btnCancelarTarea = document.getElementById("btnCancelar");
    btnCancelarTarea.addEventListener("click", function(){
        handleNavigation("/dashboard")
    })

}