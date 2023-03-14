let ciudades=[];

do{
ciudades.unshift(prompt(`Ingrese ciudades: `));
}while(confirm("Desea seguir agregando datos?") ==true);

document.write("<ul>");
for(let i=0; i<ciudades.length;i++)
{
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>")