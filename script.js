const botao = document.getElementById('botao')
const texto = document.getElementById('texto')
const ganhando = document.getElementById('ganhando')

let ValorPorClique = 1
let pontos = 0

function adiciona_texto(){
    texto.textContent = `Pontos: ${pontos}`
    ganhando.textContent = `Ganhando: ${ValorPorClique}`
}


function adicionar() {

    botao.addEventListener('click', () => {
        pontos += ValorPorClique
        adiciona_texto()
    })
}

const up1 = document.getElementById('up1')
const up2 = document.getElementById('up2')
const up3 = document.getElementById('up3')
const up4 = document.getElementById('up4')
const up5 = document.getElementById('up5')
const up6 = document.getElementById('up6')
const up7 = document.getElementById('up7')

up1.addEventListener('click', () => {
    if (pontos >= 50) {
        pontos -= 50
        adiciona_texto()
        ValorPorClique += 1
    }
})
up2.addEventListener('click', () => {
    if (pontos >= 500) {
        pontos -= 500
        adiciona_texto()
        ValorPorClique += 20
    }
})
up3.addEventListener('click', () => {
    if (pontos >= 10000) {
        pontos -= 10000
        adiciona_texto()
        ValorPorClique += 250
    }
})
up4.addEventListener('click', () => {
    if (pontos >= 50000) {
        pontos -= 50000
        adiciona_texto()
        ValorPorClique += 1000
    }
})
up5.addEventListener('click', () => {
    if (pontos >= 150000) {
        pontos -= 150000
        adiciona_texto()
        ValorPorClique += 5000
    }
})
up6.addEventListener('click', () => {
    if (pontos >= 500000) {
        pontos -= 500000
        adiciona_texto()
        ValorPorClique += 20000
    }
})
up7.addEventListener('click', () => {
    if (pontos >= 5000000) {
        pontos -= 5000000
        adiciona_texto()
        ValorPorClique += 100000
    }
})


adicionar()