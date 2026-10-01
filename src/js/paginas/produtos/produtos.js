import { createIcons, icons } from "lucide";
import { listaProdutos } from "../../dadosMockados/produtos.js";

let filtroAtual = "preco";
let termoAtual = "";
let categoriaAtual = "todas";

const categoriasDisponiveis = ["todas", ...new Set(listaProdutos.map(({ categoria }) => categoria))];

function escaparHtml(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function configurarBusca(termo = "", categoria = "todas") {
  termoAtual = termo;
  categoriaAtual = categoriasDisponiveis.includes(categoria) ? categoria : "todas";
  filtroAtual = "preco";
}

function renderizarProdutos(app) {
  const termoNormalizado = termoAtual.toLocaleLowerCase("pt-BR");
  const itens = [...listaProdutos]
    .filter(
      ({ nome, categoria }) =>
        nome.toLocaleLowerCase("pt-BR").includes(termoNormalizado) &&
        (categoriaAtual === "todas" || categoria === categoriaAtual)
    )
    .sort((a, b) =>
      filtroAtual === "distancia" ? a.distanciaKm - b.distanciaKm : a.valor - b.valor
    );

  const cardsHtml = itens.length
    ? itens
        .map(
          (produto) => `
            <article class="card-produto" data-id="${produto.id}">
              <div class="foto-produto">
                <img src="${escaparHtml(produto.img)}" alt="${escaparHtml(produto.nome)}" loading="lazy" />
              </div>
              <div class="info-produto">
                <span class="tag-categoria">${escaparHtml(produto.categoria)}</span>
                <h3 class="nome-produto">${escaparHtml(produto.nome)}</h3>
                <p class="detalhe-mercados">${escaparHtml(produto.mercados)}</p>
              </div>
              <div class="valores-produto">
                <span class="preco-destaque">${escaparHtml(produto.preco)}</span>
                <span class="economia-destaque">${escaparHtml(produto.economia)}</span>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="sem-produtos">Nenhum produto encontrado.</p>';

  const categoriasHtml = categoriasDisponiveis
    .map(
      (categoria) => `
        <button type="button" class="chip-categoria ${categoriaAtual === categoria ? "chip-categoria--ativo" : ""}" data-categoria="${categoria}">
          ${escaparHtml(categoria)}
        </button>
      `
    )
    .join("");

  app.innerHTML = `
    <section class="container-produtos">
      <header class="topo-busca-produtos">
        <button type="button" id="btn-voltar-busca" class="btn-voltar" aria-label="Voltar para a busca">
          <i data-lucide="chevron-left" aria-hidden="true"></i>
        </button>
        <div class="campo-busca-produtos">
          <i data-lucide="search" class="icone-busca-pequeno" aria-hidden="true"></i>
          <input type="text" id="input-busca-produtos" value="${escaparHtml(termoAtual)}" placeholder="Buscar produto" aria-label="Buscar produto" />
        </div>
      </header>

      <div class="carrossel-categorias" aria-label="Categorias de produtos">${categoriasHtml}</div>

      <div class="barra-filtros">
        <span class="contagem-resultados">${itens.length} produto(s) encontrado(s)</span>
        <div class="grupo-filtros">
          <button type="button" class="chip-filtro ${filtroAtual === "preco" ? "chip-filtro--ativo" : ""}" id="filtro-preco">Preço</button>
          <button type="button" class="chip-filtro ${filtroAtual === "distancia" ? "chip-filtro--ativo" : ""}" id="filtro-distancia">Distância</button>
        </div>
      </div>

      <section class="lista-produtos" aria-label="Lista de produtos encontrados">${cardsHtml}</section>
    </section>
  `;

  createIcons({ icons });

  app.querySelector("#btn-voltar-busca")?.addEventListener("click", () => {
    window.location.hash = "#buscar";
  });

  app.querySelector("#input-busca-produtos")?.addEventListener("input", ({ target }) => {
    termoAtual = target.value;
    renderizarProdutos(app);
  });

  app.querySelectorAll("[data-categoria]").forEach((botao) => {
    botao.addEventListener("click", () => {
      categoriaAtual = botao.dataset.categoria;
      renderizarProdutos(app);
    });
  });

  app.querySelector("#filtro-preco")?.addEventListener("click", () => {
    filtroAtual = "preco";
    renderizarProdutos(app);
  });

  app.querySelector("#filtro-distancia")?.addEventListener("click", () => {
    filtroAtual = "distancia";
    renderizarProdutos(app);
  });
}

export default {
  url: "#produtos",
  label: "",
  icon: "shopping-basket",
  pagina: renderizarProdutos,
  configurarBusca,
};
