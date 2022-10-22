import { Curso } from "./curso";

export class Estudiante {
  
  // Propiedad de la clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[]

  private ID: string = '123sdasfd';

  constructor(nombre: string,cursos: Curso[], apellidos?: string ) {
    this.nombre = nombre

    if (apellidos){
      this.apellidos = apellidos
    }

    this.cursos = cursos;

  };

  get horasEstudidas (): number{
    let horasEstudidas = 0

    this.cursos.forEach((cursos) => horasEstudidas += cursos.horas)

    return horasEstudidas
  }

  get ID_Estudiante (): string {
    return this.ID
  }

  set ID_Estudiante (id: string){
    this.ID = id;
  }

};