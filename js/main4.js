console.log("\n===============================");

console.log(miNombre);
let color = "Red"; //global

if(true){
    var miNombre = "Jab";
    let color = "Blue"; //local
}

console.log(miNombre);
console.log(color);