function ehPrimo (numero_primo : number) : boolean {
    if (numero_primo <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero_primo; i++)) {
        if (numero_primo % i === 0) {
            return false;
        }
    } else {
        return true;
    }
}

// Exemplo de utilização
const resultado = ehPrimo(17);
console.log(resultado);

// Fim.
