function saudacao(nome, tratamento) {
    if (tratamento === void 0) { tratamento = 'Sr'; }
    return "".concat(tratamento, " ").concat(nome);
}
// Exemplo da atividade
var nome = "Vinícius";
var CriarSaudacao = saudacao(nome, " Sr");
console.log(CriarSaudacao);
