function paridad(num){
    if(num % 2 === 0){
        const par =`<p>El número ${num} es par</p>`
        return par
    }
    else{
        const impar = `<p>El número ${num} es impar</p>`
        return impar
    }

}

const cadena = paridad(3);
document.writeln(cadena);

const cadena2 = paridad(2);
document.writeln(cadena2);