function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - livro.preco * desconto}; //a expressão "...livro" está sendo usada para criar uma cópia do objeto "livro" original com a propriedade "preco" atualizada com o valor do desconto aplicado.
    })
    return livrosComDesconto;
}