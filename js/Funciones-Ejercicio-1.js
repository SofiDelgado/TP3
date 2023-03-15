function numeroParOImpar (numero)
{
    if (numero % 2 == 0)
    {
        return "Par";
    }
    else
    {
        return "Impar";
    }
}
let numero = parseInt(prompt("Ingrese un numero: "));
const resultado = numeroParOImpar(numero);
alert(resultado);