import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'
import { LISTA_CURSOS } from './mock/Cursos.mock';
import { Curso } from './models/curso';
import { Estudiante } from './models/Estudiante';

console.log("Hola")

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

// Funciones

/**
 * Funcion que muestra por consola un nombre @param nombre
 * y su edad @param edad
 */

function name(nombre: string, edad: number) {
  console.log(`${nombre} - ${edad}`)
};

name('Federico', 22);

function despedir(nombre?:string){
  if(nombre){
    console.log(`Adios ${nombre}!`);
  }else{
    console.log('Adios!');
  }
};

despedir('Jose');
despedir();

// arrow function.

type Empleado = {
  nombre:string;
  apellido:string;
  edad:number
}

let empleadoMartin: Empleado = {
  nombre:'martin',
  apellido: 'Maritez',
  edad: 10
}

const mostrarEmpleado = (empleado: Empleado):string => `${empleado.nombre} tiene ${empleado.edad}`

mostrarEmpleado(empleadoMartin)

const datosEmpleado = (empleado: Empleado):string => {
  if(empleado.edad > 5){
    return `Empleado ${empleado.nombre} Esta en edad de jubilacion`;
  }else{
    return `el empleado ${empleado.nombre} esta en edad laboral`;
  };
};

datosEmpleado(empleadoMartin);

const obtenerSalario = (empleado: Empleado, cobrar: Function) => {
  if(empleado.edad > 70){
    return
  }else{
    cobrar()
  }
}

const cobrarSalario = () => {
  console.log('Cobrar nomina de empleado')
}

obtenerSalario(empleadoMartin, cobrarSalario)

// async function

async function ejemploAsync (): Promise<string> {
  await console.log('Tarea a completar antes de seguir con la secuencia de instruccioens')
  console.log('Tarea completada')
  return "completado"
}

ejemploAsync()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => "Todo ha terminado.")

// Funcion generadora

function* ejemploGenerator () {
  
  //yield --> Para emitir valores.

  let index : number = 0;

  while (index < 5){
    //Emitimos un valor incrementado.

    yield index++
  }

}

// Guardar la funcion generadora en una variable.

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos.

console.log(generadora.next()) // 0
console.log(generadora.next()) //1
console.log(generadora.next()) //2
console.log(generadora.next()) //3

//worker

function* watcher(valor: number) {
  yield valor; //Emitimos el valor inicial
  yield worker(valor); // LLamamos a la emicion del worker para que emita otros valores
  yield valor + 10; //Emitimos el valor final.
}


function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value) // 0 lo ha hecho el watcher
console.log(generatorSaga.next().value) // 1 Lo ha hecho el worker
console.log(generatorSaga.next().value) // 2 Lo ha hecho el worker
console.log(generatorSaga.next().value) // 3 Lo ha hecho el worker
console.log(generatorSaga.next().value) // 4 lo ha hecho el watcher

// sobrecarga de funciones 

function mostrarError(error: (string | number)){
  console.log(`ha habido un error: ${error}`);
};

// PPersistencia de datos.
// 1. LocalStorage.  --> Almacena los datos en el navegador de forma pesistida
// 2. sessionStorage. --> los datos persisten en la sesion del navegador
// 3. Cookies. --> Tienen fecha de caducidad y tambien tienen un ambito de URL.


// localStorage

//function guardarLocalStorage(): void{
 // localStorage.setItem('nombre', 'Martin');
//}

//function leerLocalStorage(): void{
//  let session = localStorage.getItem('nombre')
//}


// COOKIES.

const cookeisOptions = {
  name: "usuario",
  value: "Martin",
  maxAge: 10 * 60,
  expires: new Date(2099, 10, 1),
  path: "/"
};

// set cookie
setCookie(cookeisOptions)

// Leer una cookie
let cookieLeida = getCookieValue("usuario")
console.log(cookieLeida)

// Eliminar
deleteCookie("usuario");

// Elimiar todas las cookies .
deleteAllCookies()


// Class Temporizador

class Temporizador {

  public terminar?: (tiempo: number) => void;

  public empezar(): void {

    setTimeout(() => {
      //Verificar si existe la funcion terminar como callBack
      if(!this.terminar) return;

      //Cuando haya pasado el tiempo se ejecutara la funcion terminar
      this.terminar(Date.now())

    }, 3000);
  };
};

const miTemporizador = new Temporizador();

// Definimos la funcion del callback a ejecutar cuando termine el tiempo.

miTemporizador.terminar = (tiempo: number) => console.log("terminamos la tarea,", tiempo);

//Lanzamos el temporizador

miTemporizador.empezar(); // Iniciara el timeOut

setInterval(() => console.log("Tic"), 1000); // Imprimir tic cada segundo por consola.

delete miTemporizador.terminar;

 // Creamos un curso

const cursoTs: Curso = new Curso("TypeScript", 15);
const cursoJs: Curso = new Curso("JavaScript", 20);

// const listaCursos: Curso[] = [];

// Usamos el mock

const listaCursos: Curso[] = LISTA_CURSOS;


listaCursos.push(cursoTs, cursoJs);

const martin: Estudiante = new Estudiante("Martin", listaCursos, "Fernandez");

console.log(`${martin.nombre} Estudia:`)
martin.cursos.forEach( curso => console.log(`- ${curso.nombre} (${curso.horas})`))

const cursoReact: Curso = new Curso("React", 55);
martin.cursos.push(cursoReact);

// Saber la diferencia de un objeto/variable
// - typeof
// - instanceof


// Conocer las horas estudiadas de martin

martin.horasEstudidas;
martin.ID_Estudiante;
martin.ID_Estudiante = 'Nueva ID';

























