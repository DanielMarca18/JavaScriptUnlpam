//ejerccio 1
//video club
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

usuario.peliculasFavoritas.push{titulo: "titulo pelicula 4"}

