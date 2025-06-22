function calculoPertimetro(ladoA,ladoB){
    let p = 2 * (ladoA+ladoB);
    return p;
}

calculoPertimetro()
const ladoA = parseInt(prompt('Ingrese el valor del lado A: '));
const ladoB = parseInt(prompt('Ingrese el valor del lado B: '));
const perimetro = calculoPertimetro(ladoA,ladoB)
document.writeln(`El perimetro del cuadrado es ${perimetro}`)