const tax = document.getElementById('tax');
const usd = document.getElementById('usd');
const brl = document.getElementById('brl');

const buttonTax = document.getElementById("confirmTax");
const buttonUsd = document.getElementById("confirmUsd");
const buttonBrl = document.getElementById("confirmBrl");
const buttonClear = document.getElementById("clear");

var taxValue;

buttonUsd.disabled = true;
buttonBrl.disabled = true;
buttonClear.disabled = true;

function confirm() {
    if (tax.value === '') {
        return alert('Preencha o campo da taxa de conversão!');
    }
    taxValue = tax.value;

    buttonTax.disabled = true;
    buttonUsd.disabled = false;
    buttonBrl.disabled = false;
    buttonClear.disabled = false;
}

function usdToBrl() {
    if (usd.value === '') {
        return alert('Preencha o campo do valor em dólares!');
    }
    brl.value = (usd.value * taxValue).toFixed(2);
}

function brlToUsd() {
    if (brl.value === '') {
        return alert('Preencha o campo da taxa em real!');
    }
    usd.value = (brl.value / taxValue).toFixed(2);
}

function clearData() {
    tax.value = '';
    brl.value = '';
    usd.value = '';
    buttonTax.disabled = false;
    buttonUsd.disabled = true;
    buttonBrl.disabled = true;
    buttonClear.disabled = true;
}