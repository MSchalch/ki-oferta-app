import {mapaderotas} from "./rotas/rotas.js"
import {navbar} from "./navbar/navbar.js"

const app = document.getElementById("app")

navbar(mapaderotas)

function renderizarPagina() {
    const hash = window.location.hash || "#home"
    const rota = mapaderotas.find((rota) => rota.url === hash)
    if (rota) {
        rota.pagina(app)
        navbar(mapaderotas, hash)
    } else {
        app.innerHTML = "<h1>Página não encontrada</h1>"
    }
}

window.addEventListener("hashchange",()=>{
    renderizarPagina()
})
renderizarPagina()