var bancoDeDados = [
    {
        nome: "Bolo de morango",
        descricao: "Melhor bolo do mundo",
        preco: 300,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooppp",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "HHuuuuuuum, bolo bao!",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of bancoDeDados) {
    
    var conteudoPrincipal = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    conteudoPrincipal.appendChild(conteudoProduto)
}



