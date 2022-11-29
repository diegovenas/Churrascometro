let inputAdultos = document.querySelector("#adultos");
let inputCriancas = document.querySelector("#criancas");
let inputDuracao = document.querySelector("#duracao");

let carnePorPessoa = 400;
let cervejaPorPessoa = 1200;
let refriPorPessoa = 1000;

let ok = inputDuracao.value



function calcular() {

  if(inputDuracao.value >= 6) {
    console.log(inputDuracao.value)
    carnePorPessoa = 650;
    cervejaPorPessoa = 2000;
    refriPorPessoa = 1500;
    console.log( carnePorPessoa, cervejaPorPessoa, refriPorPessoa)
  } 

  let quantidadeCarne =
    inputAdultos.value * carnePorPessoa +
    (inputCriancas.value * carnePorPessoa) / 2;

  let quantidadeBebida = inputAdultos.value * cervejaPorPessoa;

  let quantidadeRefri =
    inputAdultos.value * refriPorPessoa +
    (inputCriancas.value * refriPorPessoa) / 2;

  let resultado = document.querySelector("#resultado");

  resultado.innerHTML = ` 
    <p> Quanridade de Carne: ${quantidadeCarne/1000} KG </p>
    <p> Quanridade de Bebida: ${quantidadeBebida} ML </p>
    <p> Quanridade de Refrigerante: ${quantidadeRefri} ML </p>
  `;

  carnePorPessoa = 400;
  cervejaPorPessoa = 1200;
  refriPorPessoa = 1000;
  

}


