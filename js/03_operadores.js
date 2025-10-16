//
//alert("estas utilizando javascript");
let caja = document.querySelector(".contenedor");
let numero1 = 2;
let numero2 = 3;
let nombre = "Jab";

//insertamos el valor de la variable a la caja 
caja.innerHTML = nombre;

console.log(numero1);
numero1 += 10; //operador de asignacion
console.log(numero1);
numero1 -=10; //operador de asignacion
console.log(numero1);
numero1 *=10;
console.log(numero1);
numero1 /= 10;
console.log(numero1);

// si el igual va antes del signo, es una asignacion
console.log(`El valor es: ${numero2}`)
numero2 =+ 10;
console.log(`El nuevo valor: ${numero2}`);

dibujar(numero2);

//
function dibujar(valor){
    caja.innerHTML += `<div>${valor}</div>`
}

//operadores aritmaticos
let res = numero2 / numero1;
dibujar(res);

/*
==  igual (comparar el valor)
=== igual (comparar el valor y el tipo de dato)
>=  
<=
/!=
/!==
*/

function elResultado(valor){
    if(valor){
        return "iguales";
    }else{
        return "distintos";
    }
}

function elMayor(valor){
    if(valor){
        return "es el mayor";
    }else {
        return "es el menor";
    }
}

let var1 = 5;
let var2 = "5";
let var3 = true;
let resultado;

resultado = var1 == var2; //solo compara el valor 
console.log(elResultado(resultado));

resultado = var1 === var2; //compara el valor y el tipo de dato
console.log(elResultado(resultado));

resultado = var1 >= numero2;
if(resultado){
    console.log(`El ${var1} es mayor o igual a ${numero2}`);
}else {
    console.log(`El ${var1} no es mayor ni igual a ${numero2}`);
}

resultado = !nombre;
console.log(resultado);
resultado = !var2;
console.log(var2);
console.log(typeof(var2));
resultado = !var1;
console.log(var1);
console.log(typeof(var1));

numero1 = 0;
resultado = !numero1;
console.log(resultado);

let dinero = 1000;
console.log(dinero+2000);
console.log(dinero);
dibujar(dinero+2000);
dibujar(dinero);


/**
 * OPERADORES TERNARIOS
 */

let myName = "Jab";
let age = 28;
let headers = 1;
let job = true;
let salary = 5894.6;

let vivo = true;



(myName === "Jab")
? dibujar("soy jab")
: dibujar("no soy jab");

(age >= 18) ? dibujar("Eres mayor de edad") : dibujar("No eres mayor de edad");

(headers > 0) ? dibujar("Tienes 1 o mas cabezas") : dibujar("No tienes ninguna cabeza");

(job) ? dibujar("You have work") : dibujar("you haven't work");

(salary <= 8000) 
? dibujar("No pagas impuestos") 
: dibujar("debes pagar impuestos");

let existo = (vivo)? "Si existo" : "No existo";
dibujar(existo);

let ingreso = (myName == "Jab" && age >= 18) ? true : false;

(ingreso) 
? dibujar("Puedes ingresar estas en lista") 
: dibujar("No puedes ingresar");

