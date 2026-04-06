'use strict'

// Import do array de funcionários
import funcionarios from "./funcionarios.json" with { type: "json" }

// Container no html
const container = document.getElementById('container')

// faz um array de cards
const card = funcionarios.map(criarCard)

// Retorna um card em html
function criarCard (funcionario) {
    // DIV -> container
    const card = document.createElement('div')
    card.className = 'card'

    // IMG -> foto do funcionário
    const img = document.createElement('img')
    img.src = `./img/${funcionario.imagem}`
    img.alt = `Foto de ${funcionario.nome}`

    // H3 -> Nome do funcionário
    const nome = document.createElement('h3')
    nome.textContent = funcionario.nome

    // SPAN -> Cargo do funcionário
    const cargo = document.createElement('span')
    cargo.textContent = funcionario.cargo

    // Adiciona tudo ao container 'card'
    card.append(img, nome, cargo)

    return card
}

// Adiciona os cards na página
    // (...) separa o array, permitindo o uso do 'replaceChildren'
container.replaceChildren(...card)