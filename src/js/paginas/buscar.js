import produtos from "./produtos/produtos.js";

const categoriasDisponiveis = [
  { id: "mercearia", nome: "Mercearia", icone: "🍚" },
  { id: "hortifruti", nome: "Hortifrúti", icone: "🍎" },
  { id: "bebidas", nome: "Bebidas", icone: "🥤" },
  { id: "limpeza", nome: "Limpeza", icone: "🧼" },
  { id: "higiene", nome: "Higiene", icone: "🪥" },
  { id: "carnes", nome: "Carnes", icone: "🥩" },
];

function buscar(app) {
  const cardsCategoriasHtml = categoriasDisponiveis
    .map(
      (cat) => `
      <li class="lista-categoria" data-categoria="${cat.id}">
        <span class="icone-categoria">${cat.icone}</span>
        <span class="nome-categoria">${cat.nome}</span>
      </li>
    `
    )
    .join("");

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
        <form class="grupo-input" id="form-busca">
          <label for="input-busca">
            <span class="icone-busca">&#9906;</span>
          </label>
          <input 
            type="text" 
            id="input-busca" 
            placeholder="Produto ou marca (ex: café, sabonete)"
            aria-label="campo busca de produto"
            autocomplete="off"
          >
          <button type="submit" id="btn-busca" aria-label="Buscar produtos"> 
            <span>&#8594;</span>
          </button>
        </form>
        <p class="busca-atencao">Preços atualizados enviados por consumidores locais.</p>
      </section>

      <section class="categorias-busca">
        <h2 class="titulo-categorias">Categorias em destaque</h2>
        <ul class="categoria-grid">
          ${cardsCategoriasHtml}
        </ul>
      </section>

      <footer class="rodape-aviso-login">
        <span>Viu uma promoção no mercado?</span>
        <a href="#conta" class="link-entrar">Entrar</a>
      </footer>
    </div>
  `;

  adicionarEventos(app);
}

function adicionarEventos(app) {
  const formBusca = document.getElementById("form-busca");
  const inputBusca = document.getElementById("input-busca");
  const itensCategoria = document.querySelectorAll(".lista-categoria");

  if (formBusca) {
    formBusca.addEventListener("submit", (e) => {
      e.preventDefault();
      const termo = inputBusca ? inputBusca.value.trim() : "";
      
      produtos.configurarBusca(termo, "todas");
      window.location.hash = produtos.url;
    });
  }

  itensCategoria.forEach((item) => {
    item.addEventListener("click", () => {
      const categoriaSelecionada = item.dataset.categoria;
      
      produtos.configurarBusca("", categoriaSelecionada);
      window.location.hash = produtos.url;
    });
  });
}

export default {
  url: "#buscar",
  label: "Buscar",
  icon: "search",
  pagina: buscar,
};
