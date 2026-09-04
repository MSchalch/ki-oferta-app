async function favoritos(app) {
 app.innerHTML = /* HTML */`
 <header>
    <h1>Favoritos</h1>
 </header>
 `;
}
export default { url: '#favoritos', label: 'Favoritos', pagina: favoritos };