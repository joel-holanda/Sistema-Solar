var nome = document.getElementById('nome');
var posicao = document.getElementById('posicao');
var temperatura = document.getElementById('temperatura');
var fundo = document.getElementById('informacao');
var voltar = document.getElementById('voltar');
var texto = document.getElementById('texto');

alert('Ola, Seja Bem-Vindo ao Sistema Solar. Quando voce começar a ver os planetas diminua ou aumente a tela para ter uma melhor experiencia');


function informercurio() {
    aparecer();

    nome.innerHTML = 'MERCÚRIO';
    texto.innerHTML = 'Mercúrio é considerado o menor planeta do Sistema Solar desde o rebaixamento de Plutão a planeta anão. A proximidade de Mercúrio com o Sol (é o planeta mais próximo dessa estrela) torna o desenvolvimento da vida nesse planeta bastante difícil, pois há altas e baixas temperaturas, instabilidades climáticas, atmosfera fraca e uma superfície escura, talvez devido à presença de grafite ou mesmo pelas altas temperaturas, que “carbonizam” as paisagens.'

};

function inforvenus() {
    aparecer();

    nome.innerHTML = 'VÊNUS';
    posicao.innerHTML = 'Vênus é o segundo planeta do sistema Solar mais próximo do Sol. Tem cerca de 800 milhões de anos e além do Sol e da Lua é o corpo celeste mais brilhante no céu, motivo pelo qual é conhecido desde a antiguidade.'
    temperatura.innerHTML = 'Também chamado de Estrela Dalva, estrela da manhã, estrela da tarde e joia do céu, é considerado um planeta irmão da Terra. Isso decorre em virtude das similaridades de massa, densidade e volume entre ambos.'
};

function inforterra() {
    aparecer();

    nome.innerHTML = 'TERRA';
    posicao.innerHTML = 'O Planeta Terra é um dos planetas que fazem parte do Sistema Solar e é o terceiro planeta mais próximo do Sol. A sua formação ocorreu há bilhões de anos, assim como a existência de vida aqui . Algumas teorias explicam sua origem, como a teoria da nebulosa solar.'

    temperatura.innerHTML = 'A Terra é considerada um planeta telúrico e possui sua estrutura interna dividida em: crosta terrestre, manto e núcleo. Além da estrutura externa, há também a interna que corresponde à litosfera, hidrosfera, biosfera e atmosfera, que são o que oferece as condições favoráveis para a existência de vida aqui.'
};
function informarte() {
    aparecer();

    nome.innerHTML = 'MARTE';
    posicao.innerHTML = 'Marte é um planeta do sistema solar que se encontra situado em quarto lugar a partir do Sol. Durante a noite é identificado pela sua aparência, uma estrela vermelha, característica essa que lhe rendeu o nome de Marte, nomeação feita pelos antigos romanos. Além dos romanos, os chineses, coreanos e japoneses o denominaram de “Estrela de Fogo”.'

    temperatura.innerHTML = 'Marte é um planeta com tamanho inferior ao da Terra. Para realização do movimento de rotação, a duração é de 24,6 horas e translação 687 dias.O diâmetro do planeta é de 6.794 quilômetros e as temperaturas oscilam entre 20ºC e – 130ºC. A composição atmosférica em marte é de dióxido de carbono, nitrogênio, oxigênio e monóxido de carbono.'
};
function inforjupiter() {
    aparecer();

    nome.innerHTML = 'JUPITER';
    posicao.innerHTML = 'Quinto planeta a partir do Sol, situado entre Marte e Saturno, Júpiter é o maior planeta do sistema solar, com diâmetro de 142.984 quilômetros – caberiam mil planetas como a Terra em Júpiter. Sua atmosfera é composta principalmente de hidrogênio e hélio.';

    temperatura.innerHTML = 'A distância de Júpiter para o Sol é de aproximadamente 779 milhões de quilômetros. A temperatura média desse gigante corpo celeste é de -110 °C. Uma das características marcantes de Júpiter é a Grande Mancha Vermelha, considerada uma tempestade anticiclônica.';
};
function inforsaturno() {
    aparecer();

    nome.innerHTML = 'SATURNO';
    posicao.innerHTML = 'Saturno é o sexto planeta do Sistema Solar — contando-se a partir da distância do sol —, sendo mais conhecido pelos anéis que o circundam. Trata-se do segundo maior planeta desse sistema, atrás apenas de Júpiter, apresentando um diâmetro de 120 536 km, que é cerca de nove vezes maior que o diâmetro equatorial terrestre.';

    temperatura.innerHTML = 'O movimento de rotação do planeta Saturno é bastante acelerado, o que reverbera no achatamento de seus polos. No total, o planeta leva cerca de 10 horas e 39 minutos para completar uma volta em torno de si mesmo, enquanto o seu movimento de translação leva cerca de 29 anos, 167 dias e 6 horas terrestres para completar-se.';
};
function inforurano() {
    aparecer();

    nome.innerHTML = 'URANO';
    posicao.innerHTML = 'O planeta Urano é o terceiro maior do Sistema Solar e está posicionado na sétima órbita a partir do Sol. Formado principalmente por gases e fluidos, Urano não possui uma superfície sólida como a Terra. Sua estrutura é composta, ainda, por sistemas de anéis que orbitam ao seu redor, os quais são menos brilhantes do que os de outros planetas, como Saturno. Ao todo, Urano possui 27 luas conhecidas. Apenas uma sonda espacial visitou o planeta, sendo a maior parte das descobertas ao seu respeito feita com o auxílio de telescópios.';

};
function inforneturno() {
    aparecer();

    nome.innerHTML = 'NETURNO';
    posicao.innerHTML = 'Netuno é o oitavo planeta a partir do Sol. É um gigante gasoso, bem como Júpiter, Saturno e Urano. Está distante 4,5 bilhões de quilômetros do Sol e demora 156 anos terrestres para completar uma órbita. Foi descoberto em 1846 e recebeu o nome do deus romano do mar.';
    temperatura.innerHTML = 'O planeta Netuno é composto, principalmente, de água muito quente, amônia e metano em seu núcleo, que tem aproximadamente o tamanho da Terra. A atmosfera é formada por hidrogênio, hélio e metano. Assim como Urano, a cor azulada brilhante de Netuno resulta da elevada quantidade de metano na atmosfera.';
};


function atras() {
    fundo.style.opacity = '0';
    fundo.style.zIndex = '0';
    voltar.style.opacity = '0';

    nome.innerHTML = '';
    texto.innerHTML = '';
    posicao.innerHTML = '';
    temperatura.innerHTML = '';
};

function aparecer() {
    fundo.style.opacity = '1';
    fundo.style.zIndex = '1';
    voltar.style.opacity = '1';    
}
