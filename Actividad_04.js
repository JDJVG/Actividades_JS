
// Usando While, cea un programa que pregunte al usuario un numero. Mostrar los numeros que son multiplos de 5 desde 1 hasta el numero indroducido por el usuario.

var x = Number(prompt("Ingresa un numero"));
var y = 1;
while (y < x) {
    if ( y % 5 === 0) console.log(y); y++
}

//Usando Do , cea un programa que pregunte al usuario un numero. Mostrar los numeros que son multiplos de 5 desde 1 hasta el numero indroducido por el usuario.

var numero = Number(prompt("Inggresa un numero"))
var x = 1
do{
    if(x % 5 === 0){
        console.log(x)
    }
    x++;
}while ( x <= numero)


//Usando For, Crea un programa que imprima en consola los numeros impares del uno al 50

for (var x=1; x<=50; x++ ){
    if (x %2!==0) {
        console.log(x)
    }
}


