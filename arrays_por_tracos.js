function formatarArrayParaString(nomes) {
    var StringFormated = "";
    nomes.forEach(function (nomes, index) {
        StringFormated += nomes.toString();
        if (index < nomes.length - 1) {
            StringFormated += "-";
        }
    });
    return StringFormated;
}
// Agora, irei testar meu forEach em arrays formatadas:
var nomes = ["Ana", "Clara", "João", "Marcelo", "Maria"];
nomes.forEach(function (nome, indice, array) {
    /* Eu faço uso do laço de iteração for, para percorrer o restante da lista antes do forEach e assim verificar se existem
    valores duplicados. */
    for (var index = indice + 1; indice < array.length; indice += 1) {
        if (array[index] === nome)
            array.splice(index, 1);
        {
        }
    }
});
var sala_de_aula = formatarArrayParaString(nomes);
console.log(sala_de_aula);
// Mais um exemplo de uso
var paises = ["Brasil", "Alemanha", "Inglaterra", "França"];
var resultado = formatarArrayParaString(paises);
console.log(resultado);
