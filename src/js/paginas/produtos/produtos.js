import listaProdutos from "../../dadosMockados/produtos.js";
import { createIcons, icons } from "lucide";

let filtroAtual = "preco";

function renderizarProdutos(app, termo = "café") {
  const itens = [...listaProdutos].sort((a, b) => {
    if (filtroAtual === "distancia") {
      return a.distanciaKm - b.distanciaKm;
    }

    return a.valor - b.valor;
  });

  const cardsHtml = itens
    .map(
      (produto) => `
        <article class="card-produto" data-id="${produto.id}">
          <div class="foto-produto">
            <i data-lucide="package" aria-hidden="true"></i>
          </div>
          <div class="info-produto">
            <h3 class="nome-produto">${produto.nome}</h3>
            <p class="detalhe-mercados">${produto.mercados}</p>
          </div>
          <div class="valores-produto">
            <span class="preco-destaque">${produto.preco}</span>
            <span class="economia-destaque">${produto.economia}</span>
          </div>
        </article>
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
          <input
            type="text"
            id="input-busca-produtos"
            value="${termo}"
            placeholder="Buscar produto"
            aria-label="Buscar produto"
          />
        </div>
      </header>

      <div class="barra-filtros">
        <span class="contagem-resultados">${itens.length} produtos · 12 mercados</span>
        <div class="grupo-filtros">
          <button type="button" class="chip-filtro ${filtroAtual === "preco" ? "chip-filtro--ativo" : ""}" id="filtro-preco">Preço</button>
          <button type="button" class="chip-filtro ${filtroAtual === "distancia" ? "chip-filtro--ativo" : ""}" id="filtro-distancia">Distância</button>
        </div>
      </div>

      <section class="lista-produtos" aria-label="Lista de produtos encontrados">
        ${cardsHtml}
      </section>
    </section>
  `;

  createIcons({ icons });

  document.getElementById("btn-voltar-busca")?.addEventListener("click", () => {
    window.location.hash = "#buscar";
  });

  document.getElementById("filtro-preco")?.addEventListener("click", () => {
    filtroAtual = "preco";
    renderizarProdutos(app, termo);
  });

  document.getElementById("filtro-distancia")?.addEventListener("click", () => {
    filtroAtual = "distancia";
    renderizarProdutos(app, termo);
  });
}

export default {
  url: "#produtos",
  label: "",
  icon: "shopping-basket",
  pagina: renderizarProdutos,
};
