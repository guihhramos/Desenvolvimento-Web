var bancoDeDados = [
    {
        nome: "Bolo de churros",
        descrição: "Bolo bommmm",
        preco: 300,
        imagem: "https://via.placeholder.com/120"
    },
    {
        nome: "bolo de cenoura",
        descrição: "O melhor da região",
        preco: 150,
        imagem: "https://via.placeholder.com/120"
    },
    {
        nome: "bolo de chocolate",
        descrição: "huuuumm bolu baaooo",
        preco: 200,
        imagem: "https://via.placeholder.com/120"
    }
]

var conteudoPrncipal = document.getElementById('conteudo-principal')
for (var produto of bancoDeDados){
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = "https://via.placeholder.com/120"
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h3')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descrição
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = `R$ ${produto.preco}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "comprar"
    conteudoProduto.appendChild(botaoComprar)

    var botaodetalhes = document.createElement('button')
    botaodetalhes.textContent = "detalhes"
    conteudoProduto.appendChild(botaodetalhes)
    
    conteudoPrncipal.appendChild(conteudoProduto)
}