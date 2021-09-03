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
    let value = 0;
    let array = [];
    for(let i = 1; i <= 25; i++){
        value =+ i;
        array.push(value);
    }
    return array;
}

function kata2() {
    let value = 0;
    let array = [];
    for(let i = 25; i >= 1; i--){
        value =+ i;
        array.push(value);
    }
    return array;
}

function kata3() {
    let value = 0;
    let array = [];
    for(let i = 1; i <= 25; i++){
        value =+ i;
        array.push(value * (-1));
    }
    return array;
}

function kata4() {
    let value = 0;
    let array = [];
    for(let i = 25; i >= 1; i--){
        value =+ i;
        array.push(value * (-1));
    }
    return array;
}

function kata5() {
    // cria a variável que armazenará os valores
    // cria o array vazio que retornará os resultados
    // cria um laço for para iterar do número 25 a -25
    // verifica se o número atual é ímpar
    // se for ímpar, adiciona no array
    // retorna o array

    let value = 0;
    let array = [];
    for(let i = 25; i >= -25; i--){
        if(i % 2 != 0){
            array.push(i);
        }
    }
    return array;
}

function kata6() {
    // cria a variável que armazenará os valores
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar do número 0 a 100
    // verifica se o número atual é divisível por 3
    // se for, adiciona no array
    // retorna o array

    let value = 0;
    let array = [];
    for (let i = 1; i <= 100; i++){
        if(i % 3 === 0){
            array.push(i);
        }
    }
    return array;
}

function kata7() {
    // cria a variável que armazenará os valores
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar do número 0 a 100
    // verifica se o número atual é divisível por 7
    // se for, adiciona no array
    // retorna o array

    let value = 0;
    let array = [];
    for (let i = 1; i <= 100; i++){
        if(i % 7 === 0){
            array.push(i);
        }
    }
    return array;
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
