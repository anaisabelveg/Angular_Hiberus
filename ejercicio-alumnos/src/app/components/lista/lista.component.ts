import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  alumnos:any = []

  constructor(private alumnosService: AlumnosService) { 
    this.alumnos = this.alumnosService.todos()
  }

  ngOnInit(): void {
  }

}
