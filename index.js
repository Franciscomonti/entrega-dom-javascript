const listaProductos = [{
        nombre: "Coca-Cola",
        descripcion: "Botella gaseosas coca-cola regular de 2.25lts. precio por unidad.",
        precio: 200,
        imagen: "coca-cola.webp"
    },

    {
        nombre: "Shwepper",
        descripcion: "Botella gaseosas Schwepper s/azucar 1.5lts. precio por unidad.",
        precio: 130,
        imagen: "shueo.webp"
    },
    {
        nombre: "Fanta",
        descripcion: "Botella gaseosas Fanta 2.25lts. precio por unidad.",
        precio: 130,
        imagen: "fanta.webp"
    },
    {
        nombre: "Sprite",
        descripcion: "Botella gaseosas Sprite s/azucar 1.5lts. precio por unidad.",
        precio: 130,
        imagen: "sprite.webp"
    },
]

class Constprod {
    constructor(nombre, descripcion, precio, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

function mostrarNombre() {
    let nombreUsuario = prompt("Ingrese su nombre")
    let mostrarNombreUsuario = document.querySelector("#nombre-usuario span")
    mostrarNombreUsuario.innerHTML = nombreUsuario
}

function agregarProductos() {
    let numerosProductos = parseInt(prompt("Cantidad de productos a agregar:"))
    for (let index = 0; index < numerosProductos; index++) {
        let nombre = prompt("Nombre de producto:")
        let descripcion = prompt("Descripcion de producto:")
        let precio = prompt("Precio de producto:")
        let imagen = prompt("Imagen de producto (si no posee imagen cargar default.svg):")
        let productosAgregados = new Constprod(
            nombre,
            descripcion,
            precio,
            imagen
        )
        listaProductos.push(productosAgregados)
    }
}

function crearCards() {
    const contenedorCards = document.getElementById("boxCards");

    for (const producto of listaProductos) {
        let card = document.createElement("div")
        card.className = "cards";
        card.innerHTML =
            `<img src="./img/${producto.imagen}" alt="">
            <div class="cards-descript">
                <h2>${producto.nombre}</h2>
                <h6>${producto.descripcion}</h6>
                <h5>$${producto.precio}</h5>
                <a href="">Comprar ahora</a>
            </div>`;
        contenedorCards.append(card);
    }
}

function main() {
    mostrarNombre()
    agregarProductos()
    crearCards()
}
main()