import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  dataSource: any;
  nombreColumnas = ['nombre', 'apellido', 'nota', 'comportamiento', 'repetidor'];
  dato: string =""

  @ViewChild(MatSort)
  sort:MatSort | undefined;

  @ViewChild(MatPaginator)
  paginator: MatPaginator | undefined;

  alumnos: any = [
    {comportamiento:'bueno', repetidor: false, nombre: 'Juan', apellido:'Lopez', nota: 7.5},
    {comportamiento:'regular', repetidor: false, nombre: 'Maria', apellido:'Sanchez', nota: 5.8},
    {comportamiento:'malo', repetidor: true, nombre: 'Paula', apellido:'Rodriguez', nota: 3.5},
    {comportamiento:'regular', repetidor: false, nombre: 'Rodrigo', apellido:'Vazquez', nota: 9.2},
    {comportamiento:'bueno', repetidor: false, nombre: 'Jorge', apellido:'Martin', nota: 2.7},
    {comportamiento:'malo', repetidor: true, nombre: 'Marta', apellido:'Gonzalez', nota: 8.4}
  ];

  constructor(){
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  filtrar(){
    this.dataSource.filter = this.dato;
  }

  ngAfterViewInit(): void {
      // inicializamos el sort
      if (this.sort != undefined){
        this.dataSource.sort = this.sort;
      }

      // inicializamos el paginador
      if (this.paginator != undefined){
        this.dataSource.paginator = this.paginator;
      }
  }
}
