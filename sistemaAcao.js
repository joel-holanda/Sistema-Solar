var nome = document.getElementById('nome');
var posicao = document.getElementById('posicao');
var temperatura = document.getElementById('temperatura');
var fundo = document.getElementById('informacao');
var voltar = document.getElementById('voltar');

alert('Ola, Seja Bem-Vindo ao Sistema Solar');
alert('Me desculpa por usar essa caixa que te atrapalha em ver mais antes preciso lhe informa que o site ainda nao estar pronto');
alert('clique em qualquer planeta para saber mais sobre ele')


function informercurio() {
    aparecer();

    nome.innerHTML = 'Neturno';
    posicao.innerHTML = 'Planeta mais proximo ao sol '
    temperatura.innerHTML = '-170 °C';
};

function inforvenus() {
    aparecer();

    nome.innerHTML = 'Vênus';
    posicao.innerHTML = 'Segundo planeta mais proximo do sol'
    temperatura.innerHTML = '480°C';
};

function inforterra() {
    aparecer();

    nome.innerHTML = 'Terra';
    posicao.innerHTML = 'Terceiro planeta mais proximo ao sol '
    temperatura.innerHTML = '-15°C';
};
function informarte() {
    aparecer();

    nome.innerHTML = 'Marte';
    posicao.innerHTML = 'Quarto planeta mais proximo ao sol '
    temperatura.innerHTML = 'Varia de -125 graus ate 22 graus';
};
function inforjupiter() {
    aparecer();

    nome.innerHTML = 'jupiter';
    posicao.innerHTML = 'Quinto planeta mais proximo ao sol '
    temperatura.innerHTML = '-150°C';
};
function inforsaturno() {
    aparecer();

    nome.innerHTML = 'saturno';
    posicao.innerHTML = 'Sexto planeta mais proximo ao sol '
    temperatura.innerHTML = '-140°C';
};
function inforurano() {
    aparecer();

    nome.innerHTML = 'urano';
    posicao.innerHTML = 'Setimo planeta mais proximo ao sol '
    temperatura.innerHTML = '-185°C';
};
function inforneturno() {
    aparecer();

    nome.innerHTML = 'neturno';
    posicao.innerHTML = 'Oitavo planeta mais proximo ao sol '
    temperatura.innerHTML = '-200°C.';
};


function atras() {
    fundo.style.opacity = '0';
    fundo.style.zIndex = '0';
    voltar.style.opacity = '0';
};

function aparecer() {
    fundo.style.opacity = '1';
    fundo.style.zIndex = '1';
    voltar.style.opacity = '1';    
}
