var array_de_valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var numeros_pares = array_de_valores.filter(function (numero) { return numero % 2 === 0; });
console.log(numeros_pares);
