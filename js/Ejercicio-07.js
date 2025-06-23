function tablaMultiplicar(num){
    for (let i = 1; i<=10; i++){
        const r = num * i;
        document.writeln(`<p>${num} * ${i} = ${r}</p>`)
    }
}

const numero = parseInt(prompt(`Ingrese un número`))
tablaMultiplicar(numero)
