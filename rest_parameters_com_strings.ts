function exibicao(elementos : string[]) : void {
    elementos.forEach(elemento_unico => {
        console.log(elemento_unico);
    });
}

exibicao("a", "b");
exibicao("a", "b", "c");
exibicao("a", "b", "c", "d");
