let ciudades = []

do{
    const ciudad = prompt(`Ingrese una ciudad y su país: Ej: Nueva York, Estados Unidos`);
    if(ciudad!=null && ciudad.trim !== ``){ 
    ciudades.push(ciudad);
    }
}while(confirm(`¿Desea ingresar otra ciudad?`))

document.writeln(`El arreglo de ciudades tiene ${ciudades.length} elementos`)
const indice=0;
document.writeln("<ul>");
document.writeln(
  `<li>Elemento 1er posición: ${ciudades[indice]}</li>`
);
if(ciudades.length >= 2){
document.writeln(`<li>Elemento 3er posición: ${ciudades[2]} </li>`)
}
document.writeln(`<li>Elemento última posición: ${ciudades[ciudades.length-1]}</li>`)
document.writeln("</ul>");

document.writeln("<ul>");
ciudades.push(`Paris`)
document.writeln(`<li>Elemento última posición: ${ciudades[ciudades.length-1]}</li>`)
document.writeln("</ul>");

ciudades.splice(1,0,'Barcelona')
document.writeln("<h2 class='mt-3'>Arreglo de ciudades</h2>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln("</ul>");