function soma(x : number, y?: any) : number {
    return x + y;
}

// Letra A
console.log(soma(1, 2));  // Saída 3.

// Letra B
console.log(soma(1, "2"));  // Saída 12. 

// Letra C
console.log(soma(1));  // Saída NaN.