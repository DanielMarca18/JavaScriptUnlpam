//ejercicio 1
//Peliculas Favoritas:
//Crea un objeto usuario con propiedades como nombre y peliculasFavoritas, que es un array de objetos donde cada objeto representa una película con propiedades como titulo y año. Agrega al menos tres películas favoritas y muestra en la consola el título de la segunda película favorita.

let usuario = {
    nombre: "Nombre Usuario",
    peliculasFavoritas: [
        {
            titulo: "Tituki pelicula 1",
            anio: "2021"
        },
        {
            titulo: "Tituki pelicula 2",
            anio: "2022"
        },
        {
            titulo: "Tituki pelicula 3",
            anio: "2023"
        },
    ]
}
console.log(usuario.nombre);
console.log(usuario.peliculasFavoritas[1].titulo);

//usuario.peliculasFavoritas.push(titulo: "titulo pelicula 4")

// Ejercicio 2
// Gestor de Contactos:
// Crea un objeto contactos que almacene una lista de objetos, donde cada objeto represente un contacto con propiedades como nombre, telefono y email. Luego, agrega un nuevo contacto a la lista y muestra en la consola la cantidad total de contactos.

let contactos  = {
    contc_1: {
        nombre: 'pepito',
        telefono: '23021234',
        email: 'pepito@pepito.com'
    },

    contc_2: {
        nombre: 'sesito',
        telefono: '23025678',
        email: 'sesito@pepito.com'
    }
}
let nuevoContacto = 'contc_3'
contactos[nuevoContacto] = {
    nombre: 'juanito',
    telefono: '23028834',
    email: 'juanito@pepito.com'
}
console.log(Object.values(contactos).length);

//Tienda en Línea:
//Crea un objeto producto con propiedades como nombre, precio y disponible. Luego, crea una función llamada mostrarProducto que tome un objeto producto como argumento y muestre en la consola toda la información del producto.

let tiendaLinea = {
    productos: [
        {
            producto: 'Remera',
            precio: 1500,
            disponible: true
        },
        {
            producto: 'Pantalon',
            precio: 4000,
            disponible: false
        },
        {
            producto: 'Buzo',
            precio: 6500,
            disponible: true
        },
    ]
};

function mostrarProducto(producto) {
    console.log("Producto:", producto.producto);
    console.log("Precio:", producto.precio);
    console.log("Disponible:", producto.disponible ? "Sí" : "No");
}

// Llamar la función para mostrar un producto específico
mostrarProducto(tiendaLinea.productos[0]);


// Calificaciones de Estudiantes:

//Crea un objeto clase que contenga un array de objetos, donde cada objeto represente un estudiante con propiedades como nombre y calificaciones, que es un array de números. Agrega al menos tres estudiantes y muestra en la consola el promedio de calificaciones de cada estudiante.

let clase = {
    estudiantes: [
        {
            nombre: 'pepe',
            calificaciones: [10, 8, 6]
        },
        {
            nombre: 'luca',
            calificaciones: [10, 8, 6]
        },
        {
            nombre: 'don',
            calificaciones: [10, 8, 6]
        },
    ]
}
function calcularpromedio(calificaciones){
    let sumaParcial = 0
    let total = 0
    if(calificaciones != undefined && calificaciones != '') {
    for (const nota of calificaciones){
        sumaParcial
    }
    }
}