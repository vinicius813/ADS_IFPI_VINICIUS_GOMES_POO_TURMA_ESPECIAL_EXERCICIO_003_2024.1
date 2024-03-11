function ola() {
    console.log("Olá, Mundo!");
    
}

// Conversão de função em arrow function
const imprimirOlaMundo = () => {
    console.log("Olá, Mundo!");
};

imprimirOlaMundo();  // Saída: Olá, Mundo!

// Outro exemplo
const carro = {
    modelo : string  = 'Ferrari';
    fabricante : string = 'Chevrolet';

    NomeCompleto: () => {
        return `${this.modelo} ${this.fabricante}`
    }
}

console.log(carro.NomeCompleto);  // Saída: Ferrari Chevrolet
