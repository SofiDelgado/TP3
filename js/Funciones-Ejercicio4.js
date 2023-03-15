function tablaDeMultiplicar(numero){
document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`);
document.write(`<ul>`);
for(let i=1; i<=10; i++)
{
    document.write(`<li>${numero} * ${i} = ${numero*i}</li>`);
}
document.write(`</ul>`);
}
let numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicion: "));
tablaDeMultiplicar(numero);