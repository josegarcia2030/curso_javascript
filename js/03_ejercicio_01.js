//Message

//Valor a modificar
let nota = 10;


/**
 * A mostrar en el <div class="resultado">
 * Si es de 5 a 10: "!Has APROBADO!!" (color green)
 * o sino: "Has suspendido" (color: red)
 * 
 * A mostrar en el <div class="nota">
 * De 9 en adelante: "Excelente"
 * De 7 a menos de 9: "Notable"
 * De 5 hasta menos de 7: "Aprobado"
 * Menos de 5: "Suspendido"
 */

function dibujar(valor){
    (nota > 4 && nota < 11)
    ? document.querySelector(".resultado").innerHTML = `<div class="aprobado">Has Aprobado</div>`
    : document.querySelector(".resultado").innerHTML = `<div class="suspendido">Has suspendido</div>`
    document.querySelector(".nota").innerHTML = valor;
}

(nota < 0 || nota > 10)
? dibujar("No te flipes")
: (nota < 5)
    ? dibujar("Suspendido")
    : (nota < 7)
        ? dibujar("Aprobado")
            : (nota < 9)
                ? dibujar("Notable")
                : dibujar("Excelente");




console.log(nota);