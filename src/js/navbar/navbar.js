function navbar(rotas, atual) {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const itens = rotas
    .filter((rota) => rota.label && rota.label !== "")
    .map((rota) => {
      const ativo =
        rota.url === atual || (atual === "#produtos" && rota.url === "#buscar");
      const icones = {
        "#buscar": "search",
        "#mapa": "map",
        "#enviar": "plus",
        "#favoritos": "heart",
        "#conta": "user",
      };
      const icone = icones[rota.url] || "circle";
      return `
        <li class="navbar__item">
          <a href="${rota.url}" class="navbar__link ${ativo ? "navbar__link--ativo" : ""}" ${ativo ? 'aria-current="page"' : ""}>
            <i class="navbar__icone" data-lucide="${icone}" aria-hidden="true"></i>
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
