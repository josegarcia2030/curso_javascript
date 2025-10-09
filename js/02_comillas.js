//
let nombre1 = "jose enrique";
let nombre2 = 'jab';
let nombre3 = `Jab`;

let apellido = "garcia flores";
let edad = 28;

let imagen = "js-official-svgrepo-com.svg";

let fecha_actual = new Date().getFullYear();
let resultado = `Mi nombre es ${nombre1} ${apellido}, tengo ${edad} años`;

console.log(resultado);

function calcularNacimiento(){
    return fecha_actual - edad;
}

console.log(`La fecha de nacimiento : ${calcularNacimiento()}`);



document.querySelector("body").innerHTML = `
<div>
    Mi nombre es ${nombre1} ${apellido}
</div>
<div>
    <img src="images/${imagen}">
</div>
`