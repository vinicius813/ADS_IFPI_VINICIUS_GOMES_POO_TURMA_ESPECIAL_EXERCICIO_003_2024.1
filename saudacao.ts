function saudacao(nome : string, tratamento : string = 'Sr') : string {
    return `${tratamento} ${nome}`;
}

// Exemplo da atividade
const nome = "Vinícius";
const CriarSaudacao = saudacao(nome, " Sr");

console.log(CriarSaudacao);


