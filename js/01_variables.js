//VARIABLES

let myNombres = "jose enrique";
let myApellidos = "garcia flores";
let myEdad = 28;

let cliente = {
    nombre: "",
    apellidos: "",
    edad: 0,
    ventaTotal: 0.0,
    cantidadTotal: 0.1,
    efectivo: false,
    soltero: true,
};

let productos = [
    {nombre: "",descripcion: "", precio: 0, stock: 0, tarjeta: false },
    {nombre: "",descripcion: "", precio: 0, stock: 0, tarjeta: false },
    {nombre: "",descripcion: "", precio: 0, stock: 0, tarjeta: false },
    {nombre: "",descripcion: "", precio: 0, stock: 0, tarjeta: false },
    {nombre: "",descripcion: "", precio: 0, stock: 0, tarjeta: false },
    [
        {},
        {},
        {}
    ]
]

function infoPersona(){
    console.log("Nombre: ", myNombres);
    console.log("Apeliidos: ", myApellidos);
    console.log("Edad: ", myEdad);
}



infoPersona();