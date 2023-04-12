// Crear array productos para poder mostrarlos 
const stockProductos = [
    {
        id: 1,
        nombre: "Samsung Galaxy A54",
        cantidad: 1,
        desc: `Memoria Int: 256GB
        Memoria RAM: 8GB
        Cámara frontal: 32MP`,
        precio: 1749.00,
        img: "public/img/product_1.png",
    },
    {
        id: 2,
        nombre: "Xiaomi Redmi 12C",
        cantidad: 1,
        desc: `Memoria Int: 128GB
        Memoria RAM: 4GB
        Audífonos In Ear Xiaomi`,
        precio: 629.00,
        img: "public/img/product_2.png",
    },
    {
        id: 3,
        nombre: "iPhone 11 6.1",
        cantidad: 1,
        desc: `Memoria Int: 64GB
        Memoria RAM: 4GB
        Doble cámara principal 12 MP`,
        precio: 2149.00,
        img: "public/img/product_3.png",
    },
    {
        id: 4,
        nombre: "Motorola E13 6.5",
        cantidad: 1,
        desc: `Memoria Int: 64GB
        Memoria RAM: 2GB
        Color: Verde Aurora`,
        precio: 449.00,
        img: "public/img/product_4.png",
    },
    {
        id: 5,
        nombre: "Nokia 6.52 G20 TA-1343 DS LTAU",
        cantidad: 1,
        desc: `Memoria Int: 128GB
        Memoria RAM: 4GB
        Color: Azul`,
        precio: 579.00,
        img: "public/img/product_5.png",
    },
    {
        id: 6,
        nombre: "Laptop Asus Vivobook 15",
        cantidad: 1,
        desc: `Memoria Int: 512GB
        Memoria RAM: 8GB
        Intel Core i5-1135G7`,
        precio: 2799.00,
        img: "public/img/product_6.png",
    },
    {
        id: 7,
        nombre: "Laptop Asus Gaming ROG Strix",
        cantidad: 1,
        desc: `Memoria Int: 1TB SSD
        Memoria RAM: 16GB
        Intel Core i5-1135G7`,
        precio: 8599.00,
        img: "public/img/product_7.png",
    },
    {
        id: 8,
        nombre: "Laptop Victus by HP",
        cantidad: 1,
        desc: `Memoria Int: 512GB SSD
        Memoria RAM: 8GB
        Intel Core i7-11600H`,
        precio: 4399.00,
        img: "public/img/product_8.png",
    },
    {
        id: 9,
        nombre: "Laptop Asus TUF Gaming F15",
        cantidad: 1,
        desc: `Memoria Int: 512GB SSD
        Memoria RAM: 8GB
        Intel Core i7-11600H`,
        precio: 3199.00,
        img: "public/img/product_9.png",
    },
    {
        id: 10,
        nombre: "Laptop Gamer MSI Crosshair 15",
        cantidad: 1,
        desc: `Memoria Int: 1TB SSD
        Memoria RAM: 16GB
        Intel Core i7-12700H`,
        precio: 8599.00,
        img: "public/img/product_10.png",
    },
    {
        id: 11,
        nombre: "All in One HP 22-dd0535la 21.5",
        cantidad: 1,
        desc: `Memoria Int: 256GB SSD
        Memoria RAM: 8GB
        AMD Ryzen 3 3250U`,
        precio: 2049.00,
        img: "public/img/product_11.png",
    },
    {
        id: 12,
        nombre: "All in One Lenovo IdeaCentre 3i",
        cantidad: 1,
        desc: `Memoria Int: 256GB SSD
        Memoria RAM: 8GB
        AMD Ryzen 3 3250U`,
        precio: 1999.00,
        img: "public/img/product_12.png",
    },
    {
        id: 13,
        nombre: "All In One LG",
        cantidad: 1,
        desc: `Memoria Int: 512GB SSD
        Memoria RAM: 16GB
        `,
        precio: 4299.00,
        img: "public/img/product_13.png",
    },
    {
        id: 14,
        nombre: "All in One Lenovo IdeaCentre 27",
        cantidad: 1,
        desc: `Memoria Int: 512GB SSD
        Memoria RAM: 16GB
        Intel Core i7`,
        precio: 4199.00,
        img: "public/img/product_14.png",
    },
    {
        id: 15,
        nombre: "All In One LG 24V50N-G.AJ59B4",
        cantidad: 1,
        desc: `Memoria Int: 512GB SSD
        Memoria RAM: 8GB
        Intel Core i5-10210U`,
        precio: 3299.00,
        img: "public/img/product_15.png",
    }
];



// Vamos a crear una constante con el carrito
let carrito = [];
// Seleccionar el contenedor a donde queremos que se muestre, en este caso es el id contenedor
const contenedor = document.querySelector('#contenedor');
// Variable carrito contenedor
const carritoContenedor = document.querySelector('#carritoContenedor');
// Variable vaciar carrito
const vaciarCarrito = document.querySelector('#vaciarCarrito');
// Variable precio total
const precioTotal = document.querySelector('#precioTotal');
// Variable de procesar compra
const procesarCompra = document.querySelector('#procesarCompra');
// Variable activar Funcion de compra.hmtl
const activarFuncion = document.querySelector('#activarFuncion');
// Variable totalProceso
const totalProceso = document.querySelector('#totalProceso');
// Variable formulario
const form = document.querySelector('#procesar-pago');

if (activarFuncion) {
    activarFuncion.addEventListener('click', procesarPedido);
}
// Si recargamos los datos se pierde en el almacenamiento local, entonces:
// Cuando el documento este cargado, ejecutamos una funcion que va ser:
document.addEventListener('DOMContentLoaded', () => {
    // vamos a buscar el elemento carrito, y si por algo(||) el usuario no le agrega algo al carrito le asignamos un arreglo vacio.
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    // Llamamos al metodo que nos devuelve el carrito
    mostrarCarrito();
    // Ni bien entre el usuario a la pagina se ejecute la funcion activarFuncion
    document.querySelector("#activarFuncion").click(procesarPedido);
});
// Si existe formulario entonces
if (form) {
    form.addEventListener('submit', enviarPedido);
}
// Hacer un foreach del array
// forEach() ejecuta la función callback una vez por cada elemento del array.
stockProductos.forEach((prod) => {
    // Desestructuracion (tambien se puede hacer desde donde esta prod la desestructuracion )
    const { id, nombre, cantidad, desc, precio, img } = prod;
    // Insertar la desestructuracion en el html
    // Se tiene que poner += asi el contendor sabe que va recibir mas productos
    if (contenedor) {
        contenedor.innerHTML += `
        <div class="col-lg-2 col-md-3 col-10">
            <picture class="card">
                <img src="${img}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                        <h5 class="card-title card_h5 text-center">${nombre}</h5>
                        <p class="card-text card_description">Descripción: <br> ${desc}</p>
                        <p class="card-text py-3">Cantidad: ${cantidad}</p>
                        <p class="card-text text-center text-danger fw-bold">Precio: S/ ${precio}</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <a onclick="agregarProducto(${id})" class="btn btn-outline-primary">Add to cart <i
                            class='bx bxs-cart'></i></a>
                    </div>
                </div>
            </picture>
        </div>
        `
    }
})
if (procesarCompra) {
    // Le vamos agregar un evento a procesarCompra y le pasamos la funcion que va ejecutar
    procesarCompra.addEventListener('click', () => {
        // Condicional: si el carrito es igual a 0 no te va dejar pasar
        if (carrito.length === 0) {
            Swal.fire({
                title: "¡Tu carrito esta vacio!",
                text: "Compra algo para continuar con la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
            })
        } else {//en cambio si es mayor a 0 nos va llevar a la pagiana
            location.href = "compra.html"
        }
    })
}

if (vaciarCarrito) {
    // Vamos agregar una funcion
    // addEventListener evento
    // Cada ves que le haga click va suceder la siguiente funcion
    vaciarCarrito.addEventListener('click', () => {
        carrito.length = [];
        // LLamar metodo principal
        mostrarCarrito();
    })

}

// Vamos a definir la funcion del onclick del boton add to cart
function agregarProducto(id) {
    // Crear una constante, con el metodo some lo que hace es buscar si un elemento existe en un arreglo o no
    const existe = carrito.some(prod => prod.id === id)
    // Si ya esta en el carrito
    if (existe) {
        // Actualizamos la cantidad
        // Metodo map
        // Creamos un nuevo arreglo e iteramos sobre cada curso y cuando map encuentre cual es el que es igual al que esta agregado le va sumar la cantidad
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {

        //agregar el producto 
        // Lo que hace find es que busca si es que el producto. id es igual al id entonces lo agrega al carrito
        const item = stockProductos.find((prod) => prod.id === id)
        carrito.push(item)
    }

    // Llamamos a la funcion 
    mostrarCarrito()
}
// Lo que se va hacer que los productos que el usuario agrege en el carrito se muetren en el carrito
// Lo vamos a mostrar en modal-body
const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')
    if (modalBody) {
        // Limpiar html
        modalBody.innerHTML = ''
        // forEach para cada array
        carrito.forEach((prod) => {
            // Hacemos desestructuracion 
            const { id, nombre, cantidad, desc, precio, img } = prod
            // Con el innerHtml vamos a pintar los productos
            modalBody.innerHTML += `
            <div class="modal-contenedor py-2">
                <div>
                    <img class="img-fluid img-carrito" src="${img}" />
                </div>
                <div class="p-3">
                    <p>Producto: ${nombre}</p>
                    <p>Precio: ${precio}</p>
                    <p>Cantidad: ${cantidad}</p>
                    <div class="d-flex justify-content-center">
                        <button onclick="eliminarProducto(${id})" class="btn btn-danger btn-sm">Eliminar Producto <i class='bx bxs-trash-alt'></i></button>
                    </div>
                </div>
            </div>
        `
        })
    }
    // Condicional
    if (carrito.length === 0) {
        // Agregar texto en modal body
        modalBody.innerHTML = `
            <img src="public/img/img_2.png" class="img-fluid" alt="image shopping" /> <br>
            <p class="text-center parrafo_alert">¡Aun no agregaste nada!</p>
        `
    } else {
        console.log("Hay algo en el carrito.")
    }

    // A lo que sea que tenga el carrito
    carritoContenedor.textContent = carrito.length

    if (precioTotal) {
        // Tenemos que hacer que el precio total, que el contenido del precio total va ser igual a esta suma
        // Vamos a usar el metodo reduce  que recibe por parametro un acumulador y los productos
        // acc : acumulador va ser mas producto.cantidad y el producto.precio
        precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
        // Llamando funcion guardar storage
        guardarStorage();
    }
}
// Creando funcion para eliminar producto
function eliminarProducto(id) {
    // crearnos una constante de juego id que guarde el id
    const juegoId = id
    // Nos vamos a traer a todos los productos menos al que sea distinto a juego ID
    // Con este filter que filtra con todos, nos traemos todos los productos menos los que cumplen la condicion y mostramos el carrito abajo
    carrito = carrito.filter((juego) => juego.id !== juegoId)
    // cada ves que hagamos una actualizacion agregar o eliminar, tenemos que llamar siempre a la funcion que pinta el carrito
    mostrarCarrito()
}
// Crear funcion para guardar storage
// Para que se agrege a almacenamiento local
function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

// Metodo para procesar la compra
function procesarPedido() {
    carrito.forEach((prod) => {
        // seleccionar el identificador de la parte donde quieres que se muestre
        const listaCompra = document.querySelector('#lista-compra tbody')
        // Desestructuracion
        const { id, nombre, cantidad, desc, precio, img } = prod
        // Vamos a crearnos una fila
        const row = document.createElement('tr')
        row.innerHTML += `
            <td>
                <img src="${img}" class="img-fluid img-carrito" alt="${nombre}" />
            </td>
            <td>
                ${nombre}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                ${precio * cantidad}
            </td>
        `
        listaCompra.appendChild(row)
    })
    totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
}

// Metodo enviarPedido
function enviarPedido(e) {
    // Es para que no se recarge la pagina
    e.preventDefault();
    // id de form cliente y email
    const cliente = document.querySelector('#txtcliente').value;
    const correo = document.querySelector('#txtcorreo').value;
    // Condicional 
    if (correo === '' || cliente == '') {
        // Mensaje o modal de advertencia para que coloque nombre y correo
        Swal.fire({
            title: "¡Debes completar tu email y nombre!",
            text: "Rellena el formulario",
            icon: "error",
            confirmButtonText: "Aceptar",
        })
    } else {
        // vamos a programar para que se vea el spinner
        const spinner = document.querySelector('#spinner')
        spinner.classList.add('d-flex')
        spinner.classList.remove('d-none')
        // Utilizar una funcion propia de js setTimeout
        setTimeout(() => {
            spinner.classList.remove('d-flex')
            spinner.classList.add('d-none')
            form.reset()
        }, 3000)//tiempo estimado de aparicion

        const alertExito = document.createElement('p')
        alertExito.classList.add('alert','alerta','d-block','text-center','col-md-12','mt-2','alert-success')
        alertExito.textContent = "Compra realizada correctamente"
        // Esta alerta va ser hija del formulario
        form.appendChild(alertExito)
        setTimeout(() =>{
            alertExito.remove()
        }, 3000)
    }
}