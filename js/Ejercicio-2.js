function arreglo(ciudades) {
    document.write(`<h3>Listado de ciudades</h3>`);

    document.write("<ul>");
    for(let i=0; i<ciudades.length;i++)
    {
        document.write(`<li>${ciudades[i]}</li>`);
    }
    document.write("</ul>");
}

let ciudades=[];

do{
ciudades.push(prompt(`Ingrese ciudades: `));
}while(confirm("Desea seguir agregando datos?") ==true);

arreglo(ciudades);

document.write(`<h2>Longitud del arreglo: ${ciudades.length}</h2>`);
document.write(`<h4>Primera posicion: ${ciudades[0]}`);
document.write(`<h4>Tercera posicion: ${ciudades[2]}`);
document.write(`<h4>Ultima posicion: ${ciudades[ciudades.length - 1]}`);

document.write(`<h2>Agregar Paris como ultima posicion</h2>`);
ciudades.push(`Paris`);

arreglo(ciudades);

alert("El elemento "+ciudades[1] + " ocupa la segunda posicion");

document.write(`<h2>Sustituir la segunda posicion con "Barcelona"</h2>`);
ciudades[1] = "Barcelona";

arreglo(ciudades);