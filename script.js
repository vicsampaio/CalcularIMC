const altura = document.querySelector('#principal-altura');
const peso = document.querySelector('#principal-peso');
const calcular = document.querySelector('#calcular');
let icon = document.querySelector("#icon");



calcular.addEventListener('click', handleCalcular);
icon.addEventListener('click', backIMC);

function handleCalcular (e) {
  e.preventDefault();
  console.log('teste')

  const resultado = peso.value / (altura.value * altura.value);
  vericarResultado(resultado)
  insertBack()
}

function vericarResultado(resultadoCalculo){
  let resultado = document.querySelector('#resultado');
  let resultadoSpan = document.querySelector("#resultadoSpan");
  resultado.style.display = "flex"

  if(resultadoCalculo <= 18.5) {
    resultadoSpan.innerHTML = "MAGRO"
    resultado.style.backgroundColor = "rgba(201, 178, 143, 1)"
    return
  }

    if(resultadoCalculo <= 24.9) {
      resultadoSpan.innerHTML = "NORMAL"
      resultado.style.backgroundColor = "lightgreen"
      return
    }

      if(resultadoCalculo <= 29.9) {
        resultadoSpan.innerHTML = "SOBREPESO"
        resultado.style.backgroundColor = "rgba(203, 205, 91, 1)"
        return
      }

      if(resultadoCalculo >= 30 ) {
        resultadoSpan.innerHTML = "OBESO"
        resultado.style.backgroundColor = "rgb(241, 34, 34)"
        return
      }
}

function insertBack(){
    icon.style.display = "flex";
}

function backIMC (){
  window.location.reload()
}


// magro 18.5, normal 24.9, sobrepeso 29.9, obeso 30 >