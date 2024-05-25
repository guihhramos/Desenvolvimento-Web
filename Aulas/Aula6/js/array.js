// Arrays/Listas/vetores
// Arrays se assemelham com banco de dados
// Um array deve ser capaz de:adicionar,remover, buscar /listar e atualizar

// var nome = 'Fulano' // Variavel simples
var nomes = ['Miguel, Mateus, Monica'] // Variavel composta (Array)
// var idades = new Array()

console.log(nomes)
//console.log(nomes[0]) // Acessa a posição 0 - Miguel
//console.log(nomes[1]) // Acessa a posição 1 - Mateus
//console.log(nomes[2]) // Acessa a posição 2 - Monica

nomes.push('Davi', 'Fulano', 'Ciclano') // Adiciona elemento no array
console.log(nomes)

console.log(nomes.length0) // Tamanho do array

nomes.pop() // por padrao remove o ultimo elemento do array
console.log(nomes)

nomes.reverse() // inverte meu array
console.log(nomes)

nomes.shift() // por padrão remove o primeiro elemento do array
console.log(nomes)

nomes.sort() // ordena o array
console.log(nomes)
