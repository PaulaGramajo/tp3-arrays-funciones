function tablaMultiplicar(num){
    document.writeln(`<table class=m-3>`)
    document.writeln(`<tr class=border-4>`)
    document.writeln(`<th class=border-4>Multiplicación</th>`)
    document.writeln(`<th class=border-4>Resultado</th>`)
    document.writeln(`</tr>`)
    for (let i = 1; i<=10; i++){
        const r = num * i;
        document.writeln(`<tr class=border-4>`)
        document.writeln(`<td>${num} x ${i}</td>`)    
        document.writeln(`<td class=border-4>${r}</td>`)
        document.writeln(`</tr>`)
    }
    document.writeln(`</table>`)
}

const numero = parseInt(prompt(`Ingrese un número`))
tablaMultiplicar(numero)
