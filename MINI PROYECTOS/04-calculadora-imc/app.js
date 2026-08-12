
const formulario = document.getElementById("formulario-imc");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const inputEdad = document.getElementById("edad");

const resultado = document.getElementById("resultado");
const imcValor = document.getElementById("imc-valor");
const imcCategoria = document.getElementById("imc-categoria");
const indicador = document.getElementById("indicador");

const btnLimpiar = document.getElementById("btn-limpiar");



function calcularIMC(peso, alturaCm) {
  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);
  return parseFloat(imc.toFixed(1));
}



function obtenerCategoria(imc) {
  if (imc < 18.5) {
    return { texto: "Bajo peso", clase: "cat-bajo-peso" };
  } else if (imc < 25) {
    return { texto: "Normal", clase: "cat-normal" };
  } else if (imc < 30) {
    return { texto: "Sobrepeso", clase: "cat-sobrepeso" };
  } else {
    return { texto: "Obesidad", clase: "cat-obesidad" };
  }
}



function moverIndicador(imc) {
  const min = 10;
  const max = 40;

  let porcentaje = ((imc - min) / (max - min)) * 100;

  porcentaje = Math.max(0, Math.min(100, porcentaje));

  indicador.style.left = porcentaje + "%";
}



function mostrarResultado(imc) {
  const cat = obtenerCategoria(imc);

  imcValor.textContent = imc;
  imcCategoria.textContent = cat.texto;
  imcCategoria.className = cat.clase;

  moverIndicador(imc);

  formulario.style.display = "none";
  resultado.style.display = "block";
}



formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);
  const edad = parseInt(inputEdad.value);

  
  if (isNaN(peso) || peso <= 0) {
    alert("Ingresa un peso válido");
    return;
  }

  if (isNaN(altura) || altura <= 0) {
    alert("Ingresa una altura válida");
    return;
  }

  if (isNaN(edad) || edad <= 0) {
    alert("Ingresa una edad válida");
    return;
  }

  const imc = calcularIMC(peso, altura);
  mostrarResultado(imc);
});


btnLimpiar.addEventListener("click", function () {
  inputPeso.value = "";
  inputAltura.value = "";
  inputEdad.value = "";

  indicador.style.left = "0%";

  resultado.style.display = "none";
  formulario.style.display = "block";
});