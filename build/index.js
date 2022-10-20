"use strict";
console.log("Hola nashi");
console.log('asdddd');
const PI = 3.1416;
let apellido = "san jose";
let error = true;
error = false;
console.log(`Hola ${PI} ${apellido} ${error}`);
// Instanciacion multiple de variables.
let a, b, c; // instancia 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 10;
//Builtin types:  Number, string, boolean, void, null, undefined.
// Tipos mas complejos.
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinar tipos en listas.
let valores = [false, "hola", 1];
// Definir enumerados.
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleteo"] = "I`";
    Estados["Pendiendte"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTareas = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
//Podemos crear variables que sigan la interface tarea.
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiendte,
    urgencia: 1,
};
console.log(`Tareas: ${tarea1.nombre}`);
let coche = {
    nombre: "audi",
    precio: 100,
    anio: 2000
};
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
if (coche.anio < 2010) {
    `Coche: ${coche.nombre} es viejo.`;
}
else if (coche.anio === 2010) {
    `Coche: ${coche.nombre} es del 2010.`;
}
else {
    `Coche: ${coche.nombre} es nuevo.`;
}
;
switch (tarea1.estado) {
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
let listadoTareasNuevas = [
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
listadoTareasNuevas.forEach((e, index) => console.log(`${index} - ${e.nombre}`));
