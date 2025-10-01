//

//VARIABLES

//no se puede volver a crear otra variable con el mismo nombre
let edad = 28;
//lo sobre escribe el valor de la variable
var live = true;
//no se puede cambiar el valor de una constante
const NOMBRE = "Enrique";



let myNombre = "Nombre1";
let MYNOMBRE = "Nombre2";
let mynombre = "Nombre3";
let MyNombre = "Nombre4";

let myAge = 28;
let sueldo = 8694.5;


//Arrays
let personas = ["luis","miguel","oscar", "angel", "frank"];

console.log(personas);

//Objetos
let empleados = ["jose", "enrique", 28, true, 8954.5, 3.8];
console.log(empleados);
console.log(typeof(empleados));

//undefined
let usuario;

console.log(usuario);

//NULL
let usuario2 = null;
console.log(usuario2);

//Objetos
let estudiante = {
    nombre : "eduardo",
    curso: 5,
    turno: "tarde",
    profesor: "willy",
}
console.log("Turno: ",estudiante.turno);


//Arrays de Objetos
let clientes = [
    {nombre: "oscar", productos: 5, total: 986.9},
    {nombre: "miguel", productos: 3, total: 155.3},
    {nombre: "frank", productos: 2, total: 350.4},
    {nombre: "jose", productos: 9, total: 784.4},
    {nombre: "enrique", productos: 4, total: 255.2},
]

console.log(clientes[0].total, "Bs")


//NaN -> No es un numero
let num1 = "uno";
let num2 = 34;
let resultado = num1 * num2;

console.log(resultado);


//Podemos cambiar el tipo de Valor
let resul = "desconocido";
console.log(resul.toUpperCase());
resul = 100;
console.log(resul);
resul = false;
console.log(resul);


//Mostrar el tipo de valor - cadena
console.log("tipo de valor: ",typeof(resul));

saludar();
presentarse();

console.log(personas[3]);

function saludar(){
    console.log("Bienvenido");
}

function presentarse(){
    document.write("Welcome to page web");
}

