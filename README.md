# LSW Aula - 03

- ### Exercicio 1
  #### Crie uma função chamada dobro que recebe um número como parâmetro chamado valor e retorna o dobro desse valor.

~~~javascript
function dobro(valor) {
    return valor * 2;
}
const valor = 5;
console.log(dobro(valor));
~~~

- ### Exercicio 2
  #### Implemente uma função chamada parOuImpar que recebe um número como parâmetro e retorna a string par se o número for par ou ímpar se o número for ímpar.

~~~javascript
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  }
  return "ímpar";
}
const resultado = parOuImpar(5);
console.log(resultado);
~~~

- ### Exercicio 3
  #### Crie uma função chamada cumprimentar que recebe um nome como parâmetro e retorna uma saudação de cumprimento.

~~~javascript
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}
const nome = "Pedro";
console.log(cumprimentar(nome));
~~~
