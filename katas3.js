const inputs = document.getElementsByTagName('input');

inputs[0].style.height = '1rem'

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
    item.innerHTML = value;

    list.appendChild(item);
    title.appendChild(list);
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let array = [];
    for(let i = 1; i <= 25; i++){
        array.push(i);
    }
    return showResults(array.join(" ,"));
}

kata1();

function kata2() {
    let array = [];
    for(let i = 25; i >= 1; i--){
        array.push(i);
    }
    return showResults(array.join(" ,"));
}

kata2();

function kata3() {
    let array = [];
    for(let i = 1; i <= 25; i++){
        array.push(i * (-1));
    }
    return showResults(array.join(" ,"));
}

kata3();

function kata4() {
    let array = [];
    for(let i = 25; i >= 1; i--){
        array.push(i * (-1));
    }
    return showResults(array.join(" ,"));
}

kata4();

function kata5() {
    // cria o array vazio que retornará os resultados
    // cria um laço for para iterar do número 25 a -25
    // verifica se o número atual é ímpar
    // se for ímpar, adiciona no array
    // retorna o array

    let array = [];
    for(let i = 25; i >= -25; i--){
        if(i % 2 != 0){
            array.push(i);
        }
    }
    return showResults(array.join(" ,"));
}

kata5();

function kata6() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar do número 0 a 100
    // verifica se o número atual é divisível por 3
    // se for, adiciona no array
    // retorna o array

    let array = [];
    for (let i = 1; i <= 100; i++){
        if(i % 3 === 0){
            array.push(i);
        }
    }
    return showResults(array.join(" ,"));
}

kata6();

function kata7() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar do número 0 a 100
    // verifica se o número atual é divisível por 7
    // se for, adiciona no array
    // retorna o array

    let array = [];
    for (let i = 1; i <= 100; i++){
        if(i % 7 === 0){
            array.push(i);
        }
    }
    return showResults(array.join(" ,"));
}

kata7();

function kata8() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar do número 100 ao 0
    // verifica se o número atual é divisível por 3 ou 7
    // se for, adiciona no array
    // retorna o array

    let array = [];
    for(let i = 100; i >= 1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            array.push(i);
        }
    }
    return showResults(array.join(" ,"));
}

kata8();

function kata9() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar do número 0 ao 100
    // verifica se o número atual é multiplo de 5 e ímpar
    // se for, adiciona no array
    // retorna o array
    
    let array = [];
    for(i = 0; i <= 100; i++){
        if(i % 5 === 0 && i % 2 != 0){
            array.push(i);
        }
    }
    return showResults(array.join(" ,"));
}

kata9();

function kata10() {
    return showResults(sampleArray.join(" ,"));
}

kata10();

function kata11() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar cada item do array
    // verifica se o número atual é par
    // se for, adiciona no array
    // retorna o array

    let array = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            array.push(sampleArray[i]);
        }
    }
    return showResults(array.join(" ,"));
}

kata11();

function kata12() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar cada item do array
    // verifica se o número atual é ímpar
    // se for, adiciona no array
    // retorna o array

    let array = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 != 0){
            array.push(sampleArray[i]);
        }
    }
    return showResults(array.join(" ,"));
}

kata12();

function kata13() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar cada item do array
    // verifica se o número atual é divisível por 8
    // se for, adiciona no array
    // retorna o array

    let array = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            array.push(sampleArray[i]);
        }
    }
    return showResults(array.join(" ,"));
}

kata13();

function kata14() {
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar cada item do array
    // eleva o número atual ao quadrado e adiciona no array
    // retorna o array

    let array = [];
    for(let i = 0; i < sampleArray.length; i++){
        array.push(sampleArray[i] ** 2);
    }
    return showResults(array.join(" ,"));
}

kata14();

function kata15() {
    // cria a variável que armazenará os valores
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar cada item do array
    // reatribui o valor da variável de laço a variável de armazenamento
    // retorna o array

    let value = 0;
    let array = [];
    for(let i = 1; i <= 20; i++){
        value += i; 
    }
    return showResults(value);
}

kata15();

function kata16() {
    // cria a variável que armazenará os valores
    // cria o array vazio que retornará o resultado
    // cria um laço for para iterar cada item do array
    // reatribui o valor do item atual a variável de armazenamento
    // retorna o array

    let value = 0;
    let array = [];
    for(let i = 0; i < sampleArray.length; i++){
        value += sampleArray[i];
    }
    return showResults(value);
}

kata16();

function kata17() {
    // cria o array vazio que retornará o resultado
    // cria uma variável que armazenará o menor valor encontrado
    // a variável terá o valor inicial do primeiro índice do array
    // cria um laço for para iterar cada item do sampleArray
    // verifica qual é o menor, subtraindo a variável lowerValue com current
    // se o resultado der negativo (menor que 0), mantém o valor dar variável lowerValue
    // se o resultado der positivo (maior que 0), reatribui o valor do item atual(current) a lowerValue
    // retorna lowerValue

    let array = [];
    let lowerValue = sampleArray[0]
    for(let i = 1; i < sampleArray.length; i++){
        let current = sampleArray[i];
        if(lowerValue - current < 0){
            lowerValue;
        } else {
            lowerValue = current;
        }
    }
    return showResults(lowerValue);
}

kata17();

function kata18() {
    // cria o array vazio que retornará o resultado
    // cria uma variável que armazenará o menor valor encontrado
    // a variável terá o valor inicial do primeiro índice do array
    // cria um laço for para iterar cada item do sampleArray
    // verifica qual é o menor, subtraindo a variável lowerValue com current
    // se o resultado der negativo (menor que 0), reatribui o valor do item atual(current) a lowerValue
    // se o resultado der positivo (maior que 0), mantém o valor da variável lowerValue 
    // retorna lowerValue

    let array = [];
    let lowerValue = sampleArray[0]
    for(let i = 1; i < sampleArray.length; i++){
        let current = sampleArray[i];
        if(lowerValue - current < 0){
            lowerValue = current;
        } else {
            lowerValue;
        }
    }
    return showResults(lowerValue);
}

kata18();

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
