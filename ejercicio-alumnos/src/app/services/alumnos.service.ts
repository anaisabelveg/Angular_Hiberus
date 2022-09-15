import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: any = [
    {comportamiento:'bueno', repetidor: false, nombre: 'Juan', apellido:'Lopez', nota: 7.5},
    {comportamiento:'regular', repetidor: false, nombre: 'Maria', apellido:'Sanchez', nota: 5.8},
    {comportamiento:'malo', repetidor: true, nombre: 'Paula', apellido:'Rodriguez', nota: 3.5},
    {comportamiento:'regular', repetidor: false, nombre: 'Rodrigo', apellido:'Vazquez', nota: 9.2},
    {comportamiento:'bueno', repetidor: false, nombre: 'Jorge', apellido:'Martin', nota: 2.7},
    {comportamiento:'malo', repetidor: true, nombre: 'Marta', apellido:'Gonzalez', nota: 8.4}
  ];

  constructor() { }

  todos():any {
      return this.alumnos;
  }

  buscarAlumno(nombre: string): any{
    return this.alumnos.filter((item: any) => {
      return item.nombre == nombre
    })[0];
  }
}
