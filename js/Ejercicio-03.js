const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0] //new Array(13).fill(0)

for(let i=0; i<50; i++){
const dado1 = parseInt(Math.random() * 6 + 1);
const dado2 = parseInt(Math.random() * 6 + 1);
console.log(suma = dado1 + dado2);
apariciones[suma]++
}

document.writeln(`<table class=m-3>`)
document.writeln(`<tr class=border-4>`)
document.writeln(`<th class=border-4>Suma 🎲🎲</th>`)
document.writeln(`<th class=border-4>Apariciones</th>`)
document.writeln(`</tr>`)
for (let i = 2; i <= 12; i++) {
    document.writeln(`<tr class=border-4>`)
  document.writeln(`<td class=border-4>${i}</td>`)
  document.writeln(`<td class=border-4>${apariciones[i]}</td>`);
  document.writeln(`</tr>`)

}
document.writeln(`</table>`)