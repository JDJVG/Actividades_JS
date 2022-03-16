// Itera un arreglo = [1,4,6,10,22,55,46,2,5,0] utilizando un ciclo for, imprime en consola los valores que sean mayores a 3

var arreglo = [1,4,6,10,22,55,46,2,5,0];
for(var i = 0; i < arreglo.length; i++){
    if(i > 3 ) {
        console.log ( arreglo[i]);
    }
}

//Contruye un codido  bajo las siguientes reglas: Declara un arreglo vacio, con un ciclo While que se ejecute 5 veces, agrega los elementros array
//Recuerda incrementar la variable contador para que pueda incrementar el ciclo

var arreglo = []
var i = 0
while( i < 5 ){ 
    arreglo[i] = i
    i++
}
console.log(arreglo)