// manipulacion de objetos

const persona = {
    nombre: "diego",
    posicion: "Developer",
    email: "legolas_black@gmail.com ",
}
console.log(typeof persona)
/*Destructuring de objetos
con esta tecnica nos permite vaciar variables del objeto de manera simple y en una sola linea
*/
const {nombre, posicion, email} = persona

console.log(nombre)
console.log(posicion)
console.log(email)

/**/
const personaClonSombras ={
    nombre: "Ismael",
    posicion,
    email:"albertocaras@gmail.com"
}

console.log(personaClonSombras)