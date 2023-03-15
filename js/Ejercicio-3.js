const resultados = [0,0,0,0,0,0,0,0,0,0,0];
for(let i = 0; i <50; i++){
    const dado1 = Math.floor(Math.random()*6)+1;
    const dado2 = Math.floor(Math.random()*6)+1;
    const suma=(dado1+dado2);
    resultados[suma-2]++;

}
for(let i=0;i<resultados.length;i++)
{
    document.write(`<ul>`);
    document.write(`<li>suma ${i+2}: ${resultados[i]} apariciones</li>`);
    document.write(`</ul>`);
}
