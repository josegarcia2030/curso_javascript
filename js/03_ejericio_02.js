//Escribe aqui tus datos correctos
const NOMBRE_CORRECTO = "Jab";
const ALIAS_CORRECTO = "soyjab";
const PIN_CORRECTO = 12;
const PASSWORD_CORRECTO = "1234";


//Estos son los datos del usuario
const NOMBRE = "soyjab";
const PIN = 19;
const PASSWORD = "1234";

/**
 * Si el usuario ha escript el mismo valor en NOMBRE,
 * PIN y PASSWORD (pero no ha dejado ninguno vacio): es
 * "Bien"
 * o bien
 * Si el NOMBRE es igual al NOMBRE_CORRECTO o al
 * ALIAS_CORRECTO
 * y ademas de eso
 * el PIN es igual al PIN_CORRECTO
 * o bien
 * el PASSWORD es igual al PASSWORD_CORRECTO
 */

((NOMBRE == PIN && PIN == PASSWORD && NOMBRE != "")
|| (NOMBRE === NOMBRE_CORRECTO || NOMBRE === ALIAS_CORRECTO)
&& PASSWORD === PASSWORD_CORRECTO || PIN === PIN_CORRECTO)
? dibujar(`<div class="bien">Bien</div>`)
: dibujar(`<div class="mal">Mal</div>`)

function dibujar(valor){
    document.querySelector(".resultado").innerHTML = valor;
}