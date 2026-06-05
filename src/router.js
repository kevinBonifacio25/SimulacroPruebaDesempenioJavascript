import { loginView } from './viewsJs/loginView.js';
import { renderDashboard } from './viewsJs/dashboard.js';
import { notFoundView } from './viewsJs/notFoundView.js';
import {initLogin} from './controllerJs/loginController.js';
import {renderCreateTask} from './viewsJs/createTask.js';
import {renderTaskDetails} from './viewsJs/taskDetails.js';
import {renderTasksPage} from './viewsJs/taskPage.js';
import {initTaskPage} from './controllerJs/taskPageController.js';
import {initCrearTask} from './controllerJs/crearTareaController.js';





// mapa de rutas y sus vistas
const routes = {
    "/": {
        view: loginView,
        controller: initLogin,
    },
    "/dashboard":{
        view: renderDashboard,
        controller: null,
        
    },
    "/crear":{
        view: renderCreateTask,
        controller: initCrearTask,
    },
    "/detalles":{
        view: renderTaskDetails,
        controller: null,
    },
    "/listar":{
        view: renderTasksPage,
        controller: initTaskPage,
    },
}

export async function router(){
    // ruta actual de la URL
    const path = window.location.pathname
    // vista asociada a la ruta o ruta actual
    const route = routes[path];
    const  approot = document.getElementById("app")
    //si la ruta no existe error 404
    if (!route){
        approot.innerHTML = notFoundView()
        return
    }
    // renderiza la vista seleccionada
    approot.innerHTML = await route.view()

    //ejecuta el controller si existe
    route.controller?.()

}
    

export function handleNavigation(url){
    //cambia la URL sin recargar la pagina
    history.pushState({}, "", url)
    // actualizo el contenido segun la nueva ruta
    router()


}