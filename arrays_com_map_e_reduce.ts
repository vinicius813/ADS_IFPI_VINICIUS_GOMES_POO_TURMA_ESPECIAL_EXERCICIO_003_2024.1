const array_de_valores = [1, 2, 3, 4, 5];

// Eu utiliz o Map para dobrar a minha coleção de elementos do array de valores
const arrayDobrado = array_de_valores.map(numero => numero * 2);

// Agora, eu utilizo o método Reduce para totalizar a soma de minha coleção de elementos do array de valores
const somaTotal = array_de_valores.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(arrayDobrado); // Saída: [2, 4, 6, 8, 10]
console.log(somaTotal);  // Saída 15 = 1 + 2 + 3 + 4 + 5


