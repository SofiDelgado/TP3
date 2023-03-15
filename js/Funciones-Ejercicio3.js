const perimetro = (base,altura) => (2*(base+altura));
const base = parseInt(prompt("Ingrese la base del rectangulo"));
const altura = parseInt(prompt("Ingrese la altura del rectangulo"));
alert("El perimetro del rectangulo es: "+ perimetro(base, altura));