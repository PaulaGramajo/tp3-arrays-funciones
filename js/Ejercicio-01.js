const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

document.writeln("<h2 class= m-3>Lista de meses</h2>");
document.writeln("<ul class= ms-4>");
for (let i=0; i<meses.length; i++) {
  document.writeln(`<li>${meses[i]}</li>`);
}
document.writeln("</ul>");