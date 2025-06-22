function tipoLetra(texto){
    if(texto === texto.toUpperCase() && texto !== texto.toLowerCase()){
    const mayuscula = `<p>La cadena ingresada esta en mayusculas</p>`
    return mayuscula
    }
    else if(texto === texto.toLowerCase() && texto !== texto.toUpperCase()){ 
        const minuscula = `<p>La cadena ingresada esta en minusculas</p>`
    return minuscula
    }
    else{
        const minMay = `<p>La cadena ingresada tiene mayusculas y minusculas</p>`
        return minMay
    }
}


const esMin = tipoLetra("el texto tiene minusculas")
document.writeln(esMin)

const esMay = tipoLetra("EL TEXTO TIENE MAYUSCULAS")
document.writeln(esMay)

const esMinMay = tipoLetra("El Texto tiene MAYUSCULAS y minusculas")
document.writeln(esMinMay)

