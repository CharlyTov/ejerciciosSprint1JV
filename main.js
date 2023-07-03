//1
let miNombre = "Carlos"
//2
let miApellido = "Tovar"
//3
let miEdad = 27
//4
let miMascota = "Tigger"
//5
let edadMascota = 14
//6
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
//7
let nombreCompleto = miNombre + " " + miApellido
//8
let textoPresentacion = `Hola yo me llamo ${nombreCompleto} tengo ${miEdad} años y tengo un gato el se llama ${miMascota} y tiene ${edadMascota}`
console.log(textoPresentacion);
//9
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota
console.log("la suma de las edades es: " + sumaEdades + " la resta de edades es: " + restaEdades + " el producto de edades es:" + productoEdades + " la division de edades es: " + divisionEdades);
//10
let alumno = {
    nombre: "Carlos",
    apellido: "Tovar",
    nota: "100",
    materia: "Informatica",
    aprobo: "Si"
}
console.table(alumno)
console.log(alumno)
//11
let mascota = {
    nombre: "Tigger",
    tipo: "Gato",
    edad: "13",
    vacunado: "Si",
    desparacitado: "Si"
}
console.table(mascota)
console.log(mascota)
//12
let frutas = ["manzana","pera","fresa","banano","papaya"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
//14
let numeros = ["1500","500","600","800","700"]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
//15
familia = ["mamá","papá","tio","hermano","sobrino"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
//13
let textoAleatorio = `La ${frutas[1]} le costo ${numeros[3]} a mi ${familia[4]}`
console.log(textoAleatorio);
//16
let edad = prompt("ingrese edad:")
let soyMayorDeEdad
if(soyMayorDeEdad = edad >= 18 ){
    console.log("Soy mayor de edad y tengo " + edad)
}
//17
let suEdad = prompt("ingrese su edad:")
let edadCompañero = prompt("ingrese le edad de su compañero:")
let edadesIguales = suEdad==edadCompañero
console.log("a. Mi edad es igual a la de micompañero: ",edadesIguales)
let soyMayor = suEdad>edadCompañero
console.log("b. Mi edad es mayor a la de micompañero: ",soyMayor)
let soyMenor = suEdad<edadCompañero
console.log("c. Mi edad es menor a la de micompañero: ",soyMenor)
//18
let edadPersona = prompt("ingrese la edad:")
let altura = prompt("ingrese la altura:")
let puedeSubir = edadPersona>=6 && altura>=120
console.log("Puede subir a la atracción ", puedeSubir)
//19
let pase = prompt("ingrese el pase:")
let saldo = prompt("ingrese su saldo:")
let puedePasar = pase=="VIP" || pase=="vip" || saldo>1000
console.log("La persona puede pasar ",puedePasar)

