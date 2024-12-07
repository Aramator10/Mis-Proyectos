// Autor: Aram & Kryxuss
const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 99.99,
        imagen: "/api/placeholder/200/200",
        descripcion: "Descripción del producto 1"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 149.99,
        imagen: "/api/placeholder/200/200",
        descripcion: "Descripción del producto 2"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 199.99,
        imagen: "/api/placeholder/200/200",
        descripcion: "Descripción del producto 3"
    }
];
let carrito = [];

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.className = 'producto';
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">$${producto.precio}</p>
            <button class="btn-comprar" onclick="agregarAlCarrito(${producto.id})">
                Agregar al carrito
            </button>
        `;
        contenedor.appendChild(productoElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
});
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}
function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
    
    carritoItems.innerHTML = '';
    let total = 0;
    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoItems.appendChild(item);
        total += producto.precio;
    });
    carritoTotal.textContent = `$${total.toFixed(2)}`;
}
document.getElementById('buscar').addEventListener('input', (e) => {
    const busqueda = e.target.value.toLowerCase();
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.descripcion.toLowerCase().includes(busqueda)
    );
    mostrarProductos(productosFiltrados);
});
function enviarFormulario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    console.log('Formulario enviado:', { nombre, email, asunto, mensaje });
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'mensaje mensaje-exito';
    mensajeExito.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
    
    const formulario = document.getElementById('contactForm');
    formulario.reset();
    formulario.parentNode.insertBefore(mensajeExito, formulario);
    setTimeout(() => {
        mensajeExito.remove();
    }, 5000);
}
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
});
function cargarProductos() {
    const productosContainer = document.querySelector('.productos');
    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
    productosContainer.innerHTML = ''; // Limpiar productos existentes

    productosGuardados.forEach(producto => {
        agregarProducto(producto.titulo, producto.precio, producto.imagen, producto.descuento);
    });
}