
const input = document.getElementById('input'); // cadastro
const submit = document.getElementById('submit'); // adicionar
const remove = document.getElementById('remove'); // remover
const removeAll = document.getElementById('removeAll'); // remover
let resultado = document.getElementById('resultado');

let itens;
let checkBox = [];

submit.addEventListener('click', addItem);
remove.addEventListener('click', removeItem);
removeAll.addEventListener('click', removeAllItems);



function addItem() {
    if(input.value != '') {
        resultado.innerHTML += `<p style="">${input.value}<input type="checkbox" class="Visible"></p>`;
        checkBox = atualizaArray('input[type=checkbox]');
        itens = atualizaArray('#resultado p');
    } else {
        alert('Item Inválido, tente novamente');
    }
}

function removeItem() {
    checkBox.forEach(item => {
        if(item.checked){
            item.parentNode.remove();
        } 
    })
    checkBox = atualizaArray('input[type=checkbox]');
    itens = atualizaArray('#resultado p');
}
function removeAllItems() {
    checkBox.forEach(item => item.parentNode.remove());
}

function checkItem(e) {
    if(e.target.checked) {
        console.log('checkado')
    }
}
function atualizaArray(nodeList) {
    return Array.from(document.querySelectorAll(nodeList));
}