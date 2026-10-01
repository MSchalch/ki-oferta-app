import buscar from "../paginas/buscar.js";
import home from "../paginas/home.js";
import produtos from "../paginas/produtos/produtos.js";
import mapa from "../paginas/mapa.js";
import enviar from "../paginas/enviar.js";
import favoritos from "../paginas/favoritos.js";
import conta from "../paginas/conta.js";

const mapaderotas = [
  buscar, 
  mapa, 
  home, 
  enviar, 
  favoritos, 
  conta,
  produtos, 
];

export { mapaderotas };
