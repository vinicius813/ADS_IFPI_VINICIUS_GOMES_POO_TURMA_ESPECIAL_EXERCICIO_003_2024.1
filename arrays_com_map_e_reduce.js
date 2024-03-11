var array_de_valores = [1, 2, 3, 4, 5];
// Eu utiliz o Map para dobrar a minha coleção de elementos do array de valores
var arrayDobrado = array_de_valores.map(function (numero) { return numero * 2; });
// Agora, eu utilizo o método Reduce para totalizar a soma de minha coleção de elementos do array de valores
var somaTotal = array_de_valores.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
console.log(arrayDobrado); // Saída: [2, 4, 6, 8, 10]
console.log(somaTotal); // Saída 15 = 1 + 2 + 3 + 4 + 5
