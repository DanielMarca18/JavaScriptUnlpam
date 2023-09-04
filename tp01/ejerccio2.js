//ejercicio 2
// red social
const perfil = {
    nombre: 'leo',
    edad: 20,
    amigos: [
        {
            nombre: 'Tim',
            edad: 24
        },
        {
            nombre: 'sil',
            edad: 26
        }, {
            nombre: 'nor',
            edad: 36
        },
    ]

}
let masJoven = perfil.amigos[0];
for(const amigo of perfil.amigos) {
    if (masJoven.edad > amigo.edad) {
        masJoven = amigo;
    }
}

console.log("el amigo mas joven es: " + masJoven.nombre);
// es una funcio