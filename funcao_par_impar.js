function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(esPar(4));
console.log(esPar(7));
function Esprimo(numero_primo) {
    for (var i = 0; i <= numero_primo; i++) {
        if ((numero_primo % 1 === 0 && numero_primo % numero_primo === 0)) {
            return (Esprimo(numero_primo));
        }
    }
}
console.log(Esprimo(13));
// Os números primos são aqueles que são divisíveis por 1 e por eles mesmos.
// O número 2 é um caso especial de número par e ao mesmo tempo, primo em ambos os casos.
