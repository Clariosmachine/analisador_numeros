var campoNumero = document.querySelector('#numero')
var lista = []
var btnAdd = document.querySelector('#btnAdd')
var areaTexto = document.querySelector('#texto')
var btFim = document.getElementById('btFim')
var divInfo = document.getElementById('divInfo')

btnAdd.addEventListener('click', adicionar)
function adicionar() {
    numero = Number(campoNumero.value)
    if (campoNumero.value == '') {
        window.alert(`Por favor, digite um número.`)
    }    
    else if (lista.includes(numero)) {
        window.alert(`O número ${campoNumero.value} já existe!`)
        campoNumero.value = ''
    }
    else if (numero < 1 || numero > 100) {
        window.alert(`O número informado deve estar entre 1 e 100!`)
        campoNumero.value = ''
    }
    else {
        lista.push(numero)
        areaTexto.innerHTML += `${lista[lista.length -1]}\n`
        campoNumero.value = ''
    }
    campoNumero.focus();  // deixa o campo em evidência, pronto para o usuário digitar outro número
}

btFim.addEventListener('click', finalizar)
function finalizar(){
    const soma = lista.reduce((zero, valores) => zero + valores, 0)  // estudar método .reduce()
    lista.sort()
    divInfo.innerHTML = `<p>Você informou ao todo ${lista.length} números.</p>
    <p>O maior número informado foi o ${lista[lista.length -1]}.</p>
    <p>O menor número informado foi o ${lista[0]}.</p>
    <p>A soma dos valores =  ${soma}.</p>
    <p>A média dos valores =  ${soma / lista.length}.</p>`
}