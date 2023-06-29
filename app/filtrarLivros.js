const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria === "disponivel" ? 
    filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrados);

    if (categoria === "disponivel") {
        const valorTotal = calcularValorTotal(livrosFiltrados);
        exibirLivrosDisponiveis(valorTotal);
    }
    
}

function filtrarPorCategoria(categoria) {
    return livros.filter((livro) => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter((livro) => livro.quantidade > 0);
}

function exibirLivrosDisponiveis(valor) {
    elementoLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
        </div>
    `;
}