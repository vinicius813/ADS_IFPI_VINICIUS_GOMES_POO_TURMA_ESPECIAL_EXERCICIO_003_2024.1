var _this = this;
function ola() {
    console.log("Olá, Mundo!");
}
// Conversão de função em arrow function
var imprimirOlaMundo = function () {
    console.log("Olá, Mundo!");
};
imprimirOlaMundo(); // Saída: Olá, Mundo!
// Outro exemplo
var carro = {
    modelo: string = 'Ferrari',
    fabricante: string = 'Chevrolet',
    NomeCompleto: function () {
        return "".concat(_this.modelo, " ").concat(_this.fabricante);
    }
};
console.log(carro.NomeCompleto); // Saída: Ferrari Chevrolet
