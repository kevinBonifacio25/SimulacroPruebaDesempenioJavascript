

import {router, handleNavigation} from './router.js'

// intercepta los enlaces de la SPA

document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-link]")

    if (!link) return

    event.preventDefault()
    handleNavigation(link.getAttribute("href"))
})

// soporte para ir hacia atras o adelante en el navegador

window.addEventListener("popstate", router)
// carga inicial
router()    



