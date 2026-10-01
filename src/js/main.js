import { createIcons, icons } from "lucide";
import { mapaderotas } from "./rotas/rotas.js";
import { navbar } from "./navbar/navbar.js";

const app = document.getElementById("app");

function renderizarPagina() {
  const hash = window.location.hash || "#buscar";
  const rota = mapaderotas.find((r) => r.url === hash);
  if (rota) {
    rota.pagina(app);
    navbar(mapaderotas, hash === "#home" ? "#buscar" : hash);
    createIcons({ icons });
  } else {
    app.innerHTML = "<h1>Página não encontrada</h1>";
  }
}

navbar(mapaderotas, window.location.hash || "#buscar");
createIcons({ icons });

window.addEventListener("hashchange", () => {
  renderizarPagina();
});

renderizarPagina();
