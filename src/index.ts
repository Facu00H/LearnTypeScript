console.log("Hola nashi")
console.log('asdddd')

const PI: number = 3.1416;
let apellido: string = "san jose";
let error: boolean = true;
error = false;

console.log(`Hola ${PI} ${apellido} ${error}`)

// Instanciacion multiple de variables.

let a:string,b:boolean,c:number;  // instancia 3 variables sin valor inicial

a = "TypeScript";
b = true;
c = 10;

//Builtin types:  Number, string, boolean, void, null, undefined.


// Tipos mas complejos.
let listaTareas: string[] = ["Tarea 1", "Tarea 2"]

// Combinar tipos en listas.
let valores: (string | boolean | number)[] =[false, "hola", 1];

// Definir enumerados.

enum Estados {
  "Completado" = "C",
  "Incompleteo" = "I`",
  "Pendiendte" = "P"
}

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero"
}

let estadoTareas: Estados = Estados.Completado
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo

// Interfaces

interface Tarea {
  nombre: String,
  estado: Estados,
  urgencia: number,
}

//Podemos crear variables que sigan la interface tarea.

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiendte,
  urgencia: 1,
}

console.log(`Tareas: ${tarea1.nombre}`)



// Types de typescript

type Producto = {
  precio: number,
  nombre: string,
  anio: number
}

let coche: Producto = {
  nombre: "audi",
  precio: 100,
  anio: 2000
}

console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`)

if(error){
  console.log("Hay un error");
}else{
  console.log("No hay un error");
}

if(coche.anio < 2010){
  `Coche: ${coche.nombre} es viejo.`
}else if(coche.anio === 2010){
  `Coche: ${coche.nombre} es del 2010.`
}else{
  `Coche: ${coche.nombre} es nuevo.`
};

switch(tarea1.estado){
  case Estados.Completado:
    console.log("La tarea esta completada");
    break;
  case Estados.Incompleteo:
    console.log("La tarea esta incompleta");
    break;
  default:
    console.log("La tarea esta pendiente");
    break;
}

// Bucles.

let listadoTareasNuevas: Tarea[] = [
  {
    nombre: "Tarea2",
    estado: Estados.Completado,
    urgencia: 10
  },
  {
    nombre: "Tarea3",
    estado: Estados.Incompleteo,
    urgencia: 10
  },
  {
    nombre: "Tarea6",
    estado: Estados.Pendiendte,
    urgencia: 10
  },
];

listadoTareasNuevas.forEach((e: Tarea, index: number) => console.log(`${index} - ${e.nombre}`))

