var txtNum = document.querySelector('#txtNum');
let btnAdd = document.querySelector('.btnAdd');
var tab = document.getElementById('seltab');
let res = document.querySelector('.res');
let lista = [];

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}


function Adicionar() {
    if (isNumber(txtNum.value) && !inLista(txtNum.value, lista)) {
        let limpar = document.querySelector('.digite');
        if (tab.contains(limpar)) {
            tab.removeChild(limpar);
        }
        lista.push(Number(txtNum.value));
        let item = document.createElement('option');
        item.text = `Valor ${txtNum.value} adicionado.`
        tab.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Número inválido.');
    }
    txtNum.value = '';
    txtNum.focus();
}

function Calcular() {
    if (!lista.length == 0) {
        let total = lista.length;
        let maior = lista[0];
        let menor = lista[0];
        let soma = 0;
        let media = 0;
        for(let pos in lista) {
            soma += lista[pos];
            if(lista[pos] > maior)
                maior = lista[pos]
            if(lista[pos] < menor)
                menor = lista[pos]
        }
        media = soma / total
        res.innerHTML += `Ao todo, temos ${total} números cadastrados.<br>`;
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`;
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`;
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `A média dos valores digitados é ${media}.`
    } else {
        alert('Número inválido.');
    }
}