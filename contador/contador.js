const arr = [];
const text = document.getElementById('text');
const mae = document.getElementById('mae');


function add(){
    if(text.value === "") {
        return alert("Preencha o campo!")
    }
    arr.push(text.value)
    criarCard(arr);
    console.log(arr)
}

function incrementoContador(index){
    let contador = document.getElementById(`contador${index}`);
    contador.value++;
  };


  function limpar (index){
    let limpa = document.getElementById(`contador${index}`);
    limpa.value = -1;
  };

function criarCard(arr) {
    const resultado = arr.map(
      (card, index) =>
        `
      <div id="cardContainer" key="${index}" onclick="incrementoContador(${index})" style="background-color: ${corAleatoria()}; width: 100px; height: 100px;">
        <p>${card}</p>
        <input id="contador${index}" value="0" readonly>
        <input type="button" onclick="limpar(${index})" value="Resetar">
      </div>
      `
    );
    mae.innerHTML = resultado;
  };

  function corAleatoria(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}






























// var countClick = document.getElementById("countClick");
// var countClick2 = document.getElementById("countClick2");
// const resultado = document.getElementById("resultado");
// const restultado2 = document.getElementById("resultado2");
// let id = 0;

// function resetClick(){
//     countClick = 0;
//     resultado.innerHTML = `Você clicou ${countClick} vezes!`
// }

// function resetClick2(){
//     countClick2 = 0;
//     resultado2.innerHTML = `Você clicou ${countClick2} vezes!`
// }

//  function incrementClick(evt){
//     const id = event.target.id
//     if(id == 'countClick'){
//         countClick++;
//         console.log(countClick)  
//         resultado.innerHTML = `Você clicou ${countClick} vezes!`
//     } else if(id == 'countClick2'){
//         countClick2++;
//         console.log(countClick2)  
//         resultado2.innerHTML = `Você clicou ${countClick2} vezes!`
//     }
    
// }

// function getNextId(){
//     return id++;
// }

// const nextId = 0;
// function clicar(){
//    let id = getNextId();
//    let divElement = document.createElement('div');
//    divElement.innerHTML = 
//    `<div id="countClick" class="box" onclick="incrementClick(event)">
//    <p>clica aqui para incrementar</p>
//    <p id="resultado"></p>
//    <center><button onclick="resetClick()">clica aqui para resetar</button></center>
// </div>`
//    let divMae = document.getElementById("mae");
//    divElement.setAttribute('id', 'box', id.toString())


//    divElement.style.width = "100%";
//    divElement.style.height = "50px";


//    divElement.style.backgroundColor = "#f0" + id.toString();

//    divMae.appendChild(divElement)
// }
