const listaProdutos = [
  {
    id: 1,
    categoria: "bebidas",
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
    categoria: "bebidas",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&auto=format&fit=crop&q=60",
    nome: "Refrigerante Cola Lata 350 ml",
    preco: "R$ 4,29",
    valor: 4.29,
    economia: "até -R$ 1,20",
    mercados: "6 mercados · mais perto 0,5 km",
    distanciaKm: 0.5,
  },
  {
    id: 3,
    categoria: "bebidas",
    img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300&auto=format&fit=crop&q=60",
    nome: "Suco de Laranja Integral 1 L",
    preco: "R$ 9,90",
    valor: 9.9,
    economia: "até -R$ 2,50",
    mercados: "3 mercados · mais perto 1,2 km",
    distanciaKm: 1.2,
  },

  {
    id: 4,
    categoria: "higiene",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&auto=format&fit=crop&q=60",
    nome: "Sabonete Hidratante em Barra 90 g",
    preco: "R$ 2,89",
    valor: 2.89,
    economia: "até -R$ 0,80",
    mercados: "5 mercados · mais perto 0,8 km",
    distanciaKm: 0.8,
  },
  {
    id: 5,
    categoria: "higiene",
    img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=300&auto=format&fit=crop&q=60",
    nome: "Shampoo Nutrição Intensa 400 ml",
    preco: "R$ 16,50",
    valor: 16.5,
    economia: "até -R$ 4,30",
    mercados: "4 mercados · mais perto 1,1 km",
    distanciaKm: 1.1,
  },
  {
    id: 6,
    categoria: "higiene",
    img: "https://images.unsplash.com/photo-1559591937-e1115f5c35b6?w=300&auto=format&fit=crop&q=60",
    nome: "Creme Dental Proteção Total 90 g",
    preco: "R$ 5,49",
    valor: 5.49,
    economia: "até -R$ 1,50",
    mercados: "5 mercados · mais perto 0,7 km",
    distanciaKm: 0.7,
  },

  {
    id: 7,
    categoria: "limpeza",
    img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&auto=format&fit=crop&q=60",
    nome: "Detergente Líquido Neutro 500 ml",
    preco: "R$ 2,39",
    valor: 2.39,
    economia: "até -R$ 0,70",
    mercados: "6 mercados · mais perto 0,6 km",
    distanciaKm: 0.6,
  },
  {
    id: 8,
    categoria: "limpeza",
    img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&auto=format&fit=crop&q=60",
    nome: "Amaciante Concentrado 1,5 L",
    preco: "R$ 18,90",
    valor: 18.9,
    economia: "até -R$ 5,10",
    mercados: "3 mercados · mais perto 1,4 km",
    distanciaKm: 1.4,
  },

  {
    id: 9,
    categoria: "mercearia",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=60",
    nome: "Arroz Branco Tipo 1 Pacote 5 kg",
    preco: "R$ 24,90",
    valor: 24.9,
    economia: "até -R$ 6,00",
    mercados: "5 mercados · mais perto 0,9 km",
    distanciaKm: 0.9,
  },
  {
    id: 10,
    categoria: "hortifruti",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&auto=format&fit=crop&q=60",
    nome: "Banana Prata Climatizada 1 kg",
    preco: "R$ 6,99",
    valor: 6.99,
    economia: "até -R$ 2,00",
    mercados: "4 mercados · mais perto 0,4 km",
    distanciaKm: 0.4,
  },
];

let filtroAtual = "preco";
let categoriaAtual = "todas";

const categoriasDisponiveis = [
  "todas",
  ...new Set(listaProdutos.map((p) => p.categoria)),
];

function renderizarProdutos(app, termo = "") {
  const itensFiltrados = listaProdutos.filter((p) => {
    const atendeTermo = p.nome.toLowerCase().includes(termo.toLowerCase());
    const atendeCategoria = categoriaAtual === "todas" || p.categoria === categoriaAtual;
    return atendeTermo && atendeCategoria;
  });

  const itens = itensFiltrados.sort((a, b) => {
    if (filtroAtual === "distancia") {
      return a.distanciaKm - b.distanciaKm;
    }
    return a.valor - b.valor;
  });

  const cardsHtml = itens.length
    ? itens
        .map(
          (p) => `
      <article class="card-produto" data-id="${p.id}" data-categoria="${p.categoria}">
        <div class="foto-produto">
          <img 
            src="${p.img}" 
            alt="${p.nome}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://placehold.co/100x100?text=Sem+Foto';" 
          />
        </div>
        <div class="info-produto">
          <span class="tag-categoria" style="font-size: 0.75rem; text-transform: uppercase; color: #666; font-weight: 600;">
            ${p.categoria}
          </span>
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
        .join("")
    : `<p class="sem-produtos" style="padding: 2rem; text-align: center; color: #888;">Nenhum produto encontrado nesta categoria.</p>`;

  const chipsCategoriasHtml = categoriasDisponiveis
    .map(
      (cat) => `
      <button 
        type="button" 
        class="chip-categoria ${categoriaAtual === cat ? "chip-categoria--ativo" : ""}" 
        data-cat="${cat}"
        style="
          flex-shrink: 0;
          white-space: nowrap;
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid ${categoriaAtual === cat ? "#0d6efd" : "#ddd"};
          background: ${categoriaAtual === cat ? "#0d6efd" : "#f8f9fa"};
          color: ${categoriaAtual === cat ? "#fff" : "#333"};
          font-size: 0.85rem;
          cursor: pointer;
          text-transform: capitalize;
        "
      >
        ${cat}
      </button>
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

      <nav 
        class="carrossel-categorias" 
        aria-label="Categorias de produtos"
        style="
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 10px 16px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        "
      >
        ${chipsCategoriasHtml}
      </nav>

      <div class="barra-filtros">
        <span class="contagem-resultados">${itens.length} produto(s) encontrado(s)</span>
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

  const inputBusca = document.getElementById("input-busca-produtos");
  if (inputBusca) {
    inputBusca.addEventListener("input", (e) => {
      renderizarProdutos(app, e.target.value);
    });
  }

  const botoesCategoria = app.querySelectorAll(".chip-categoria");
  botoesCategoria.forEach((botao) => {
    botao.addEventListener("click", () => {
      categoriaAtual = botao.dataset.cat;
      const valorBusca = inputBusca ? inputBusca.value : termo;
      renderizarProdutos(app, valorBusca);
    });
  });

  const btnPreco = document.getElementById("filtro-preco");
  if (btnPreco) {
    btnPreco.addEventListener("click", () => {
      filtroAtual = "preco";
      renderizarProdutos(app, inputBusca ? inputBusca.value : termo);
    });
  }

  const btnDistancia = document.getElementById("filtro-distancia");
  if (btnDistancia) {
    btnDistancia.addEventListener("click", () => {
      filtroAtual = "distancia";
      renderizarProdutos(app, inputBusca ? inputBusca.value : termo);
    });
  }
}

export { listaProdutos };

export default {
  url: "#produtos",
  label: "",
  pagina: renderizarProdutos,
  lista: listaProdutos,
};
