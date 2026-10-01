async function favoritos(app) {
  app.innerHTML = `
    <header>
      <h1>Favoritos</h1>
    </header>
  `;
}
export default { 
  url: "#favoritos", 
  label: "Favoritos", 
  pagina: favoritos 
};
