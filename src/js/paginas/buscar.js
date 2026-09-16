import produtos from "../dadosMockados/produtos.js";

function buscar(app) {
  app.innerHTML = `
    <div class="container-buscar">
      <header class="cabecalho-buscar">
        <div class="logo-radar">
          <span class="icone-radar">&#9678;</span>
          <span class="texto-radar">Radar de Promoções</span>
        </div>
        <h1 class="subtitulo-buscar">O que você quer comprar mais barato?</h1>
      </header>

      <section class="secao-input-busca">
        <form class="grupo-input" onsubmit="event.preventDefault(); document.getElementById('btn-busca').click();">
          <label for="input-busca">
            <i data-lucide="search" id="icone-busca">&#9906;</i>
          </label>
          <input 
            type="text" 
            id="input-busca" 
            placeholder="Produto ou marca"
            aria-label="campo busca de produto"
          >
          <button type="button" id="btn-busca" aria-label="Buscar produtos"> 
            <i data-lucide="arrow-right">&#8594;</i>
          </button>
        </form>
        <p class="busca-atencao">Preços da semana de 10 a 16 de agosto, enviados por quem está no mercado.</p>
      </section>

      <section class="categorias-busca">
        <h2 class="titulo-categorias">Categorias</h2>
        <ul class="categoria-lista">
          <li class="lista-categoria" data-categoria="mercearia">Mercearia</li>
          <li class="lista-categoria" data-categoria="carnes">Carnes</li>
          <li class="lista-categoria" data-categoria="hortifruti">Hortifrúti</li>
          <li class="lista-categoria" data-categoria="bebidas">Bebidas</li>
          <li class="lista-categoria" data-categoria="limpeza">Limpeza</li>
          <li class="lista-categoria" data-categoria="higiene">Higiene</li>
        </ul>
      </section>

      <footer class="rodape-aviso-login">
        <span>Viu uma promoção no mercado?</span>
        <a href="#conta" class="link-entrar">Entrar</a>
      </footer>
    </div>
  `;
  adicionarEvento(app);
}

function adicionarEvento(app) {
  const botaoBusca = document.getElementById("btn-busca");
  const inputBusca = document.getElementById("input-busca");
  const listaCategoria = document.querySelectorAll(".lista-categoria");

  if (botaoBusca) {
    botaoBusca.addEventListener("click", () => {
      const termo =
        inputBusca && inputBusca.value.trim()
          ? inputBusca.value.trim()
          : "café";
      produtos.pagina(app, termo);
    });
  }

  listaCategoria.forEach((item) =>
    item.addEventListener("click", () => {
      const termo = item.textContent.trim();
      produtos.pagina(app, termo);
    })
  );
}

export default {
  url: "#buscar",
  label: "Buscar",
  icon: "search",
  pagina: buscar,
};
