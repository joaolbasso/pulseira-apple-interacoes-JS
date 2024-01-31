const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCorSelecionado = document.getElementById('nome-cor-selecionada');
const imagemMinuatura0 = document.getElementById('0-imagem-miniatura');
const imagemMinuatura1 = document.getElementById('1-imagem-miniatura');
const imagemMinuatura2 = document.getElementById('2-imagem-miniatura');
const opcaoCor1 = document.getElementById('0-cor');

const verdeCipreste = {
    nome: 'Verde-cipreste', 
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta +'/imagem-' + imagemSelecionada + '.jpeg';
}

let tamanhoSelecionado = 1;

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = 'Pulseira loop esportiva azul-inverno para caixa de ' + opcoesTamanho[tamanhoSelecionado];

    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

let corSelecionada = 1;

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //Trocar cor imagemVisualizacao
    imagemVisualizacao.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta +'/imagem-' + imagemSelecionada + '.jpeg';
    //Trocar titulo cor
    nomeCorSelecionado.innerHTML = 'Cor - ' + opcoesCores[corSelecionada].nome;
    //Trocar titulo do produto
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome.toLowerCase() + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    //Trocar miniaturas
    imagemMinuatura0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'
    imagemMinuatura1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'
    imagemMinuatura2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'
}