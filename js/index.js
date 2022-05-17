
console.log('Operador Módulo');

//operador matemático del módulo

//let numUno = Number(prompt('Introduce un número para saber si es par o impar: '));

let numUno = 100;
if(numUno % 2 == 0){
    console.log(numUno);
    console.log('El número ingresado es PAR');
}else{
    console.log('EL número ingresado NO es PAR');
}

let resultado = numUno / 2;
console.log ('El resultado de la división es: ', resultado);

//operadores Lógicos


//Funciones
function miFuncion(){
    console.log('Me llamaste para que haga algo');
}
miFuncion();

let numDos = 100;
let numTres = 200;

function sumar (a,b){
    let respuesta = a + b;
    console.log('El resultado de la suma es: ', respuesta);
}
sumar (numDos, numTres);

//Bucles
let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
console.log(frutas[6]);

//frutas.length(); para saber el largo del ARRAY

//Para evitar tantas líneas iguales, usamos bucles
for(let index = 0; index < frutas.length; index ++){
    console.log(index);
    console.log('Las frutas son: ',frutas[index]);
}



