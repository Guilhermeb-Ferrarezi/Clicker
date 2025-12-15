const botao = document.getElementById('botao');
const texto = document.getElementById('texto');
const ganhando = document.getElementById('ganhando');
const up1 = document.getElementById('up1');
const up2 = document.getElementById('up2');
const up3 = document.getElementById('up3');
const up4 = document.getElementById('up4');
const up5 = document.getElementById('up5');
const up6 = document.getElementById('up6');
const up7 = document.getElementById('up7');
const up8 = document.getElementById("up8");
const autoclicker = document.getElementById('autoclicker');
const multiplicador = 1.5
const botoes = [up1, up2, up3, up4, up5, up6, up7, up8]


function adiciona_texto() {
    texto.textContent = `Pontos: ${pontos}`;
    ganhando.textContent = `Ganhando: ${ValorPorClique}`;
}

function handleClick() {
    pontos += ValorPorClique;
    adiciona_texto();
}

function adicionar() {
    botao.addEventListener('click', handleClick);
}


let p1 = 50
let p2 = 500
let p3 = 10000
let p4 = 50000
let p5 = 150000
let p6 = 500000
let p7 = 5000000
let p8 = 250000000
let ganhos = [1, 20, 250, 1000, 5000, 20000, 250000, 5000000, 250000000]
let upauto = 0
let ValorPorClique = 1;
let pontos = 0;
let intervaloCliqueAutomatico = null;
let teclaEspacoPressionada = false;
let velocidadeAuto = 0
let todos_preços = [p1, p2, p3, p4, p5, p6, p7, p8]

botoes.forEach((botao, upgrade) => {
    botao.addEventListener('click', () => {
        let preco = todos_preços[upgrade]

        if (pontos >= preco) {
            pontos -= preco
            ValorPorClique += ganhos[upgrade]  // aqui você coloca o quanto cada upgrade dá
            adiciona_texto()

            // aumenta o preço DO MESMO BOTÃO
            todos_preços[upgrade] = Math.floor(preco * multiplicador)

            let novoPreco = todos_preços[upgrade]

            botao.textContent = `${formatarNumero(novoPreco)} pontos`;
        }
    })
})


function formatarNumero(n) {
    if (n >= 1_000_000_000) {
        return (n / 1_000_000_000).toFixed(1) + 'b';
    }
    if (n >= 1_000_000) {
        return (n / 1_000_000).toFixed(1) + 'm';
    }
    if (n >= 1_000) {
        return (n / 1_000).toFixed(1) + 'k';
    }
    return n.toString();
}


function iniciarCliqueAutomatico() {
    if (intervaloCliqueAutomatico !== null) return
    intervaloCliqueAutomatico = setInterval(handleClick, velocidadeAuto)
}

function pararCliqueAutomatico() {
    clearInterval(intervaloCliqueAutomatico)
    intervaloCliqueAutomatico = null
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !teclaEspacoPressionada) {
        teclaEspacoPressionada = true
        if (upauto > 0) iniciarCliqueAutomatico()
    }
})
document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        teclaEspacoPressionada = false;
        pararCliqueAutomatico()
    }
})


autoclicker.addEventListener('click', () => {
    if (pontos >= 1000000 && upauto === 0) {
        pontos -= 1000000
        adiciona_texto()
        autoclicker.textContent = '500m pontos'
        upauto++
        velocidadeAuto = 100
        return
    }

    if (pontos >= 500000000 && upauto === 1) {
        pontos >= 500000000
        adiciona_texto()
        velocidadeAuto = 25
        autoclicker.textContent = '500m pontos'
        upauto++
        return
    }
    if (pontos >= 1000000000000 && upauto === 2) {
        pontos -= 1000000000000
        adiciona_texto()
        velocidadeAuto = 10
        autoclicker.textContent = 'Max'
        upauto++
        return
    }
})
adicionar();
adiciona_texto();
