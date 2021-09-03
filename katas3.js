const inputs = document.getElementsByTagName('input');

inputs[0].style.height = '2rem'

const subboxes = document.getElementsByClassName('subbox');

const last = subboxes.length - 1;
subboxes[last].style.border = '3px solid green';

const inputPassword = document.getElementsByName('password')[0];
inputPassword.type = 'password';

inputPassword.style.border = '1px solid black';
inputPassword.style.borderRadius = '10px'

const div2 = document.querySelector('body > div:nth-child(2)');
div2.classList.add('hidden');

const subboxes2 = document.querySelectorAll('body .box .subbox');
for(let i = 0; i < subboxes2.length; i++){
    subboxes2[i].classList.add('teste');
}

// Adicionando elementos dinamicamente
// Inserindo um parágrafo na div 'box_3'
const divToAppend = document.getElementById('box_3');

const paragraph = document.createElement('p');

paragraph.innerText = 'Eu fui criado dinâmicamente';
divToAppend.appendChild(paragraph);

// Altera a altura da div 'box_3'
divToAppend.style.height = '180px'

// Inserindo uma div com a classe 'box' ao final do nossa página e
// também inserir um botão nela

const body = document.getElementsByTagName('body')[0];

const newBox = document.createElement('div');
newBox.classList.add('box');

// -- Queremos criar mais um novo elemento
const button = document.createElement('button');
button.innerText = 'Click';
button.addEventListener('Click', showResults);

// Lincar os elementos
newBox.appendChild(button);
body.appendChild(newBox);

/*------------------------------------------------------------------------------------------------------------------------------*/
// Aqui inicia Katas 3

// Criando função 'show results'

function showResults(value){
    const list = document.createElement('ul');
    const item = document.createElement('li');
    const title = document.querySelector('h1');
    console.log(list, item, body);
    item.innerText = value;

    list.appendChild(item);
    title.appendChild(list);
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
}

function kata2() {
    // implemente o código do kata 2 aqui
}

function kata3() {
    // implemente o código do kata 3 aqui
}

function kata4() {
    // implemente o código do kata 4 aqui
}

function kata5() {
    // implemente o código do kata 5 aqui
}

function kata6() {
    // implemente o código do kata 6 aqui
}

function kata7() {
    // implemente o código do kata 7 aqui
}

function kata8() {
    // implemente o código do kata 8 aqui
}

function kata9() {
    // implemente o código do kata 9 aqui
}

function kata10() {
    // implemente o código do kata 10 aqui
}

function kata11() {
    // implemente o código do kata 11 aqui
}

function kata12() {
    // implemente o código do kata 12 aqui
}

function kata13() {
    // implemente o código do kata 13 aqui
}

function kata14() {
    // implemente o código do kata 14 aqui
}

function kata15() {
    // implemente o código do kata 15 aqui
}

function kata16() {
    // implemente o código do kata 16 aqui
}

function kata17() {
    // implemente o código do kata 17 aqui
}

function kata18() {
    // implemente o código do kata 18 aqui
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
