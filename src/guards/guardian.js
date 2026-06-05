/* import { handleNavigation } from "../router";

export function authGuard(allowedRoles = []) {
    const user = JSON.parse(localStorage.getItem("user"));

    // ❌ no hay usuario logueado
    if (!user) {
        handleNavigation("/")
        return false;
    }

    // ❌ si no se definieron roles, solo validar sesión
    if (allowedRoles.length === 0) {
        return true;
    }

    // ❌ si el rol no está permitido
    if (!allowedRoles.includes(user.role)) {
        return false;
    }

    // ✔️ tiene acceso
    return true;
}



//ejemplo y ubicacion de uso del guardian
"/dashboard": {
    view: renderDashboard,
    controller: null,
    guard: () => authGuard(["admin", "user"])
},

"/admin": {
    view: renderAdminPanel,
    controller: initAdmin,
    guard: () => authGuard(["admin"])
},



//router modificado con implementacion del guardian

export async function router() {
    const path = window.location.pathname;
    const route = routes[path];
    const approot = document.getElementById("app");

    // ❌ ruta no existe
    if (!route) {
        approot.innerHTML = notFoundView();
        return;
    }

    // 🔐 GUARD (si existe)
    if (route.guard) {
        const canAccess = route.guard();

        if (!canAccess) {
            history.pushState({}, "", "/");
            approot.innerHTML = loginView();
            initLogin();
            return;
        }
    }

    // ✅ render vista
    approot.innerHTML = await route.view();

    // ejecutar controller si existe
    route.controller?.();
} */