const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o maior país do mundo?",
        alternativas: [
            {
                texto: "Rússia",
                afirmacao: " + "
            },
            {
                texto: "Vaticano",
                afirmacao: " X "
            }
        ]
    },
    {
        enunciado: "Quem é o atual presidente do Brasil?",
        alternativas: [
            {
                texto: "Luís Inácio Lula Da Silva",
                afirmacao: " + "
            },
            {
                texto: "Joanna D'arc",
                afirmacao: " X "
            }
        ]
    },
    {
        enunciado: "Quem é considerado o inventor da luz/lâmpada?",
        alternativas: [
            {
                texto: "Thomas Edison",
                afirmacao: " + "
            },
            {
                texto: "Tite",
                afirmacao: " X "
            }
        ]
    },
    {
        enunciado: "Quando ocorreu a Segunda Guerra Mundial?",
        alternativas: [
            {
                texto: "1939 - 1945",
                afirmacao: " + "
            },
            {
                texto: "1222 - 1300",
                afirmacao: " X "
            }
        ]
    },
    {
        enunciado: "Gostou do Quiz?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: " + "
            },
            {
                texto: "Não!",
                afirmacao: " X "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
