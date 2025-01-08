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

/*con esta tecnica podemos omitir el agregado de una variable que ya esta previamente declarada en algun sitio
y de esta manera hacer un asiganacion de valor a una variable*/
const personaClonSombras ={
    nombre: "Ismael",
    posicion,
    email:"albertocaras@gmail.com"
}

console.log(personaClonSombras)

/*Ejemplo de destructuring de dos o mas objetos*/

const cliente= {
    nombre: "juan",
    premium : true,
    direccion : {
        calle: "emilano zapata 2345"
    }
}
const producto= {
    nombre: "iphone 8 ",
    existencia : true
}

const {nombre: nombreProducto, direccion : {calle}}= producto
const {nombre: nombreCliente}= cliente

console.log(nombreProducto)
console.log(nombreCliente)
console.log(calle)