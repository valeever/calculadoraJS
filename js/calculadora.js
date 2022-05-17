console.log(`Estamos en el archivo de la calculadora JS`);

//DECLARO VARIABLES
var resultado;
let respuesta = document.getElementById(`respuesta`)
let numuno;
let numdos;

//INGRESO NUMEROS
function ingresar(){
    numuno = document.getElementById(`numuno`).value;
    numdos = document.getElementById(`numdos`).value;

    if(numuno==0 || numdos==0){
        alert("Error - No ingresaste los números");
        alert("Error - No ingresaste los números correctamente");
        location.href = (`../index.html`);
    }
}

//LIMPIAR LOS NUMEROS INGRESADOS
function limpiar(){
    document.getElementById(`numuno`).value = "";
    document.getElementById(`numdos`).value = "";
    respuesta.innerHTML = "Esperando un resultado...";
}
//SUMA
function sumar(){
    ingresar();
    numuno = Number(numuno);
    numdos = Number(numdos);
    resultado = numuno + numdos;
    console.log(resultado);
    respuesta.innerHTML = `La suma de los numeros es = ${resultado}`
    respuesta.innerHTML = `La suma de los números es = ${resultado}`;
}

function restar(){
    ingresar();
    resultado = numuno - numdos;
    console.log(resultado);
    respuesta.innerHTML = `La resta de los numeros es = ${resultado}`
    respuesta.innerHTML = `La resta de los números es = ${resultado}`;
}

function multiplicar(){
    ingresar();
    resultado = numuno * numdos;
    console.log(resultado);
    respuesta.innerHTML = `La multiplicación de los numeros es = ${resultado}`
    respuesta.innerHTML = `La multiplicación de los números es = ${resultado}`;
}

function dividir(){
    ingresar();
    resultado = numuno / numdos;
    console.log(resultado);
    respuesta.innerHTML = `La división de los numeros es = ${resultado}`
    respuesta.innerHTML = `La división de los números es = ${resultado}`;
}