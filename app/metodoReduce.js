function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2); /*
    O número zero passado como segundo argumento para o método reduce() é o valor inicial do acumulador.*/ 
}