let calculadora = document.getElementById(`Calculadora`)
let resultado = document.getElementById(`result`)
let numeroDigitado = ''


for (let indiceNumero = 0; indiceNumero < 10; indiceNumero++){
    
    let botao = document.createElement('button')
    botao.textContent = indiceNumero
    botao.value = indiceNumero
    botao.id = `btn-${indiceNumero}`

    if (indiceNumero % 2 == 0) {
        botao.className = 'btn-par btn'
    } else {
        botao.className = 'btn-impar btn'
    }

    botao.addEventListener(`click`, (evento) => {
        numeroDigitado += evento.target.value
        resultado.textContent = numeroDigitado
    })

    calculadora.appendChild(botao)
}

let criarBotao = (id, classe, valor) =>{
    let button = document.createElement('button')

    button.id = id
    button.className = classe
    button.value = valor
    button.textContent = valor
    calculadora.appendChild(button)
}

criarBotao('btn-ponto', 'btn btn-calcule', '.')
criarBotao('btn-soma', 'btn btn-calcule', '+')
criarBotao('btn-sub', 'btn btn-calcule', '-')
criarBotao('btn-mult', 'btn btn-calcule', '*')
criarBotao('btn-div', 'btn btn-calcule', '/')
criarBotao('btn-result', 'btn btn-calcule', '=')

document.getElementById('btn-soma').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})

document.getElementById('btn-sub').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})

document.getElementById('btn-mult').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})

document.getElementById('btn-div').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado
})

document.getElementById('btn-result').addEventListener('click', (evento) => {
    resultado.textContent = eval(numeroDigitado)
})

