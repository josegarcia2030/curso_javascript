//
let usuario = "Jab";
let productoComprado = 0;

const DESCUENTO = 0.1;

let precioDescuento;

const PRODUCTOS = [
    {
        producto: "Pantalon",
        precio: 10,
        talla: "m",
        imagen: "pantalon.jpg",
    },
    {
        producto: "Gorra",
        precio: 5,
        talla: "s",
        imagen: "gorra.jpg",
    }
];

function calcularDescuento(){
    precioDescuento = PRODUCTOS[productoComprado].precio * DESCUENTO;
    return precioDescuento;
}

function calcularPrecio(){
    return PRODUCTOS[productoComprado].precio - precioDescuento;
}

document.querySelector("body").innerHTML = `
<h1>${usuario.toUpperCase()}</h1>
    <section class="caja">
        <div>
            ${PRODUCTOS[productoComprado].producto.toUpperCase()} 
            (${PRODUCTOS[productoComprado].precio} $)
        </div>
        <div>
            DESCUENTO(10%) : ${calcularDescuento()} $
        </div>
        <div>
            <strong>PRECIO FINAL: ${calcularPrecio()} $</strong>
        </div>
        <div>
            TALLA : <strong>${PRODUCTOS[productoComprado].talla.toUpperCase()}</strong>
        </div>
        <img src="images/${PRODUCTOS[productoComprado].imagen}" class="img-producto" alt="Gorra">
    </section>
`