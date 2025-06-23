function calculoPertimetro(ladoA,ladoB){
    if (ladoA>0 && ladoB >0){
    let p = 2 * (ladoA+ladoB);
    return p;
    } else{
        const error = 'no existe, debe ingresar numeros positivos'
        return error
    }
}

calculoPertimetro()
const ladoA = parseInt(prompt('Ingrese el valor del lado A: '));
const ladoB = parseInt(prompt('Ingrese el valor del lado B: '));
const perimetro = calculoPertimetro(ladoA,ladoB)
document.writeln(`Perimetro del rectangulo = ${perimetro}`)