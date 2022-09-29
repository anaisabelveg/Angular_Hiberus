import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RestaurantesService } from '../../services/restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  lista: any = [];
  dataSource: any;
  nombreColumnas = ['nombre','cocina','precio','terraza'];
  dato:string = '';

  @ViewChild(MatSort)
  sort: MatSort | undefined;

  @ViewChild(MatPaginator)
  paginator: MatPaginator | undefined;

  constructor(private restaurantesService: RestaurantesService) { }

  filtrar(){
    this.dataSource.filter = this.dato;
  }

  ngOnInit(): void {
    this.restaurantesService.consultarTodos().subscribe((datos) => {
      this.lista = [];

      datos.forEach(item => {
        this.lista.push(item.payload.doc.data());
      });

      this.dataSource = new MatTableDataSource(this.lista);

      if (this.sort != undefined){
        this.dataSource.sort = this.sort;
      }

      if (this.paginator != undefined){
        this.dataSource.paginator = this.paginator;
      }
    });
  }

}
