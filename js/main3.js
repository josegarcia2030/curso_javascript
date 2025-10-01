
console.log("\n=================================");
let myNota = 0; //global

subirNota();
console.log(extra);
console.log(PUNTOS);

function subirNota(){
    myNota = 2; //local
    extra = 7; //local
    console.log(myNota); // out: 2
    const PUNTOS = 10; //local
}
