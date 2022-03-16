//Solicita un numero y determina si es divisible entre dos o no. Mostrando al usiario un mensaje de x numero es divisible entre 2 o x num 

var numero  =  Number(prompt("Introduce un numero"))
if ( numero % 2 == 0) {
    alert ("El numero " + numero + "  es divisible del numero 2" );
} else { 
    alert ("El numero " + numero + " no es divisible del numero 2");
}


//Crea un programa que determine si un numero introcido en un Prompt es par o no, la respuesta será mostrar un alert

var numero  =  Number(prompt('Introduce un numero'))
if ( numero % 2 == 0) {
    alert ("Es numero " + numero + "  es par" );
} else { 
    alert ("El numero " + numero + " no es par");
}

// Solicitar al usiario un numero, si el numero es 1000, imprimir " Ganaste un premio", sino "Lo sentimos, sigue participando"

//EJERCICIO 3 IF

var premio = (prompt("Introduce un numero"))
if ( premio = 1000) {
    alert('Felicidades, ganaste un premio')
} else if ( premio == 1000) {
    alert ('Lo sentimos, sigue partipando')
}



//EJERCICIO 3 SWITCH

var premio = "1000"

switch(premio) {

    case "1000":
    console.log("Felicidades, Ganaste un premio")
    break;

    default:
    console.log("Lo sentimos, sigue participando")
    break;

}


//Solicitar al usuario que ingrese dos numeros y mostrar cual de los dos es menor. considerar el caso en que ambos números son iguales. 

var numero = Number(prompt("Introduce un numero")) 
var numero2 = Number(prompt("Introduce un numero")) 

if (numero < numero2){
    console.log ('El numero menor es :'+ numero)
} else {
    console.log ('El numero menor es :' + numero2)
}

//Solicitar al usuario que ingrese tres numeros, y mostrar cual de los tres es el numero mayor y cosniderar el caso en que dos numeros sean iguales. 

var numero1 = 30 
var numero2 = 25 
var numero3 = 30;

if (numero1 === numero2 && numero1 === numero3) {
    console.log('Los numeros son iguales')
} else if (numero1 > numero2){
    if (numero1 > numero3) {
        console.log('El numero 1' + numero1 + 'es el mayor')
    } else if (numero3 > numero1) {
        console.log('El numero 3' + numero3 + 'es el mayor')
    } else {
        console.log ('El numero  ' + numero1 + ' y el numero ' + numero3 + ' son iguales')
    } 
       
}else if (numero2 > numero1) {
    if ( numero2 > numero3){ 
        console.log('El numero 2' + numero2 + 'es el mayor')
    } else if (numero3 > numero1) {
        console.log('El numero 3' + numero3 + 'es el mayor')
    } else {
        console.log ('El numero  ' + numero1 + ' y el numero ' + numero3 + ' son iguales')
    }
} else{
    console.log('El numero  ' + numero1 + ' y el numero ' + numero3 + ' son iguales')
}

