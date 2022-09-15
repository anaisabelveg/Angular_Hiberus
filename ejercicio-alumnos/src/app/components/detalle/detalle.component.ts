import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalleAlum: any = {}
  nombre: string = ''

  constructor(private ruta: ActivatedRoute, private alumnosService: AlumnosService) { 
    this.nombre = this.ruta.snapshot.params['nombre']
    this.detalleAlum = this.alumnosService.buscarAlumno(this.nombre);
    //this.detalleAlum = JSON.parse(this.ruta.snapshot.queryParams['alum'])
  }

  ngOnInit(): void {
  }

}
