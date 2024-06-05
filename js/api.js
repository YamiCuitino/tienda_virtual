const obtenerProductos= async () => {
    try{
        let respuesta = await fetch('https://fakestoreapi.com/products');
        let json = await respuesta.json();
        return json;
    } catch(error){
        console.log('Error obteniendo productos',error);
    }
}

const obtenerCategorias= async () => {
    try{
        let respuesta = await fetch('https://fakestoreapi.com/products/categories');
        let json = await respuesta.json();
        return json;
    } catch(error){
        console.log('Error obteniendo categorias',error);
    }
}

const mostrarProductos = async () => {
    try {
        let productos = await obtenerProductos('https://fakestoreapi.com/carts');
        const productosList = document.getElementById('productos');
        productosList.innerHTML = ''; 
        productos.forEach(producto => {
            let li = document.createElement('li');
            li.textContent = producto.title; 
            // li.textContent = producto.details; 
            productosList.appendChild(li); // Agregar el <li> a la lista de productos
        });
    } catch (error) {
        console.log('Se produjo un error al mostrar los productos:', error);
    }
};

const mostrarCategoria = async () => {
    try {
        let categorias = await obtenerCategorias();
        const listCategoria = document.getElementById('listCategoria');
        listCategoria.innerHTML = ''; 
        categorias.forEach(categoria => {
            const li = document.createElement('li');
            li.textContent = categoria; // Asignar el nombre de la categoría al elemento <li>
            listCategoria.appendChild(li); // Agregar el <li> a la lista de categorías
        });
    } catch (error) {
        console.log('Se produjo un error al mostrar las categorías:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const cate = document.getElementById('cate');
    if (cate) {
        cate.addEventListener('click', () => {
            mostrarCategoria();
        });
    }
})

mostrarProductos();