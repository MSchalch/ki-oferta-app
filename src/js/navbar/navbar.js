function navbar(rotas, atual) {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const itens = rotas
    .filter((rota) => rota.label && rota.label !== "")
    .map((rota) => {
      const ativo =
        rota.url === atual || (atual === "#produtos" && rota.url === "#buscar");
      const icones = {
        "#buscar": "&#9906;",
        "#mapa": "&#9901;",
        "#enviar": "+",
        "#favoritos": "&#9873;",
        "#conta": "&#9881;",
      };
      const icone = icones[rota.url] || "&#8226;";
      return `
        <li class="navbar__item">
          <a href="${rota.url}" class="navbar__link ${ativo ? "navbar__link--ativo" : ""}" ${ativo ? 'aria-current="page"' : ""}>
            <span class="navbar__icone">${icone}</span>
            <span class="navbar__texto">${rota.label}</span>
          </a>
        </li>
      `;
    })
    .join("");

  nav.innerHTML = `
    <nav class="navbar-mobile" aria-label="Navegação inferior">
      <ul class="navbar__lista">${itens}</ul>
    </nav>
  `;
}

export { navbar };
