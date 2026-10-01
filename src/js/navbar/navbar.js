function navbar(rotas, atual) {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const iconesSvg = {
    "#buscar": `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>`,
    "#mapa": `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
        <line x1="8" y1="2" x2="8" y2="18"></line>
        <line x1="16" y1="6" x2="16" y2="22"></line>
      </svg>`,
    "#enviar": `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>`,
    "#favoritos": `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>`,
    "#conta": `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>`
  };

  const iconePadrao = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
    </svg>`;

  const itens = rotas
    .filter((rota) => rota.label && rota.label.trim() !== "")
    .map((rota) => {
      const ativo =
        rota.url === atual || (atual === "#produtos" && rota.url === "#buscar");
      const isCentral = rota.url === "#enviar";
      const icone = iconesSvg[rota.url] || iconePadrao;

      return `
        <li class="navbar__item ${isCentral ? "navbar__item--destaque" : ""}">
          <a 
            href="${rota.url}" 
            class="navbar__link ${ativo ? "navbar__link--ativo" : ""} ${isCentral ? "navbar__link--destaque" : ""}" 
            ${ativo ? 'aria-current="page"' : ""}
          >
            <span class="navbar__icone" aria-hidden="true">${icone}</span>
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
