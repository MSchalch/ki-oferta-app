const listaProdutos = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&auto=format&fit=crop&q=60",
    nome: "Café Serra Azul Torrado e Moído 500 g",
    preco: "R$ 13,49",
    valor: 13.49,
    economia: "até -R$ 5,50",
    mercados: "4 mercados · mais perto 0,9 km",
    distanciaKm: 0.9,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=300&auto=format&fit=crop&q=60",
    nome: "Café Bom Dia Tradicional 500 g",
    preco: "R$ 12,89",
    valor: 12.89,
    economia: "até -R$ 4,10",
    mercados: "5 mercados · mais perto 0,9 km",
    distanciaKm: 0.9,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&auto=format&fit=crop&q=60",
    nome: "Café Serra Azul Extraforte 500 g",
    preco: "R$ 14,20",
    valor: 14.2,
    economia: "até -R$ 3,80",
    mercados: "3 mercados · mais perto 1,7 km",
    distanciaKm: 1.7,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=300&auto=format&fit=crop&q=60",
    nome: "Café Solúvel Manhã Clara 200 g",
    preco: "R$ 18,49",
    valor: 18.49,
    economia: "até -R$ 2,00",
    mercados: "2 mercados · mais perto 3,4 km",
    distanciaKm: 3.4,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&auto=format&fit=crop&q=60",
    nome: "Café Serra Azul em Cápsulas 10 un",
    preco: "R$ 19,90",
    valor: 19.9,
    economia: "até -R$ 6,09",
    mercados: "2 mercados · mais perto 3,4 km",
    distanciaKm: 3.4,
  },
];

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
      (p) => `
      <article class="card-produto" data-id="${p.id}">
        <div class="foto-produto">
          <img 
            src="${p.img}" 
            alt="${p.nome}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://placehold.co/100x100?text=Sem+Foto';" 
            />
        </div>
        <div class="info-produto">
          <h3 class="nome-produto">${p.nome}</h3>
          <p class="detalhe-mercados">${p.mercados}</p>
        </div>
        <div class="valores-produto">
          <span class="preco-destaque">${p.preco}</span>
          <span class="economia-destaque">${p.economia}</span>
        </div>
      </article>
    `
    )
    .join("");

  app.innerHTML = `
    <section class="container-produtos">
      <header class="topo-busca-produtos">
        <button type="button" id="btn-voltar-busca" class="btn-voltar" aria-label="Voltar para a busca">
          &#8249;
        </button>
        <div class="campo-busca-produtos">
          <span class="icone-busca-pequeno">&#9906;</span>
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
        <span class="contagem-resultados">7 produtos · 12 mercados</span>
        <div class="grupo-filtros">
          <button 
            type="button" 
            class="chip-filtro ${filtroAtual === "preco" ? "chip-filtro--ativo" : ""}" 
            id="filtro-preco"
          >
            Preço
          </button>
          <button 
            type="button" 
            class="chip-filtro ${filtroAtual === "distancia" ? "chip-filtro--ativo" : ""}" 
            id="filtro-distancia"
          >
            Distância
          </button>
        </div>
      </div>

      <section class="lista-produtos" aria-label="Lista de produtos encontrados">
        ${cardsHtml}
      </section>
    </section>
  `;

  const btnVoltar = document.getElementById("btn-voltar-busca");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.location.hash = "#buscar";
    });
  }

  const btnPreco = document.getElementById("filtro-preco");
  const btnDistancia = document.getElementById("filtro-distancia");

  if (btnPreco) {
    btnPreco.addEventListener("click", () => {
      filtroAtual = "preco";
      renderizarProdutos(app, termo);
    });
  }

  if (btnDistancia) {
    btnDistancia.addEventListener("click", () => {
      filtroAtual = "distancia";
      renderizarProdutos(app, termo);
    });
  }
}

export default {
  url: "#produtos",
  label: "",
  pagina: renderizarProdutos,
  lista: listaProdutos,
};
