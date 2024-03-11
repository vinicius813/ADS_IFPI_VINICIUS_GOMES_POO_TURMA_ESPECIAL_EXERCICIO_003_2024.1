function formatarArrayParaString(nomes : string[]) : string {
    let StringFormated = "";

    nomes.forEach((nomes, index) => {
        StringFormated += nomes.toString();

    if (index < nomes.length - 1) {
        StringFormated += "-";
    }  
    });

    return StringFormated;
}

// Agora, irei testar meu forEach em arrays formatadas:
const nomes = ["Ana", "Clara", "João", "Marcelo", "Maria"];

    nomes.forEach((nome, indice, array) => {
/* Eu faço uso do laço de iteração for, para percorrer o restante da lista antes do forEach e assim verificar se existem
valores duplicados. */ 
        for (let index = indice + 1; indice < array.length; indice += 1) {
            if (array[index] === nome) array.splice(index, 1) {
        }
    }
    });

const sala_de_aula = formatarArrayParaString(nomes);
console.log(sala_de_aula);


// Mais um exemplo de uso
const paises = ["Brasil", "Alemanha", "Inglaterra", "França"];
const resultado = formatarArrayParaString(paises);

console.log(resultado);
