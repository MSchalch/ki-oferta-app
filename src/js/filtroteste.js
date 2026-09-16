const livros = [
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia",
    preco: 39.9,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    genero: "Distopia",
    preco: 29.9,
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    genero: "Fábula",
    preco: 19.9,
  },
];

const livroselecionado = livros.filter(
  (livro) => livro.titulo === "O Senhor dos Anéis"
);
console.log(livroselecionado);
