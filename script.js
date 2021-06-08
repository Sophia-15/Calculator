function insert(num) {
    let numero = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = numero + num;
}

function apagar() {
    document.getElementById('input').innerHTML = ''
}

function calcular() {
    let resultado = document.getElementById('input').innerHTML;
    if (resultado){
        document.getElementById('input').innerHTML = eval(resultado)
    }else {
        document.getElementById('input').innerHTML = ('NaN')
    }
}