// const btnEvent = document.getElementById("btn-event");
// Exercício 1
// alert("Aguarde um momento para o carregamento do site");

// Exercício 2
// btnEvent.addEventListener("click",()=>{
//     alert("Botão clicado");
// })

// Exercício 3
// let num_1 = Number(prompt("Digite o primeiro número"));
// let num_2 = Number(prompt("Digite o segundo número"));
// let num_3 = Number(prompt("Digite o terceiro número"));

// if (num_1 > num_2 && num_1 > num_3) alert("O primeiro número é o maior");
// else if (num_2 > num_1 && num_2 > num_3) alert("O segundo número é o maior");
// else if (num_3 > num_1 && num_3 > num_2) alert("O terceiro número é o maior");
// else alert("Os números são iguais");

// Exercício 4
let idade = Number(prompt("Digite a sua idade"));

if (isNaN(idade)) {
  alert("O valor digitado não é um número");
} else {
  if (idade <= 18) {
    alert("Você é menor de idade");
  } else {
    alert("Você é maior de idade");
  }
}
