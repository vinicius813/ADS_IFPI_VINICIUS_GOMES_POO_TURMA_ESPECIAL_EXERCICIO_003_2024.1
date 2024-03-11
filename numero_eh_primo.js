function ehPrimo(numero_primo) {
    if (numero_primo <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero_primo); i++)
        ;
    {
        if (numero_primo % i === 0) {
            return false;
        }
    }
    {
        return true;
    }
}
// Exemplo de utilização
var resultado = ehPrimo(17);
console.log(resultado);
// Fim.
