async function conta(app) {
  app.innerHTML = `
    <header>
      <h1>Conta</h1>
    </header>
  `;
}
export default { 
  url: "#conta", 
  label: "Conta", 
  pagina: conta 
};
