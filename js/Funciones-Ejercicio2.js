function texto (cadena)
{
        if(cadena === cadena.toUpperCase())
        {
          alert("LA CADENA SOLO TIENE MAYUSCULAS");
        }
        else if(cadena  === cadena.toLowerCase())
        {
            alert("la cadena solo tiene minusculas");
        }
        else{
            alert("LA CADENA TIENE MAYUSCULAS y minusculas");
        }
    
}
const cadena = prompt("Ingrese un texto");
texto(cadena);
