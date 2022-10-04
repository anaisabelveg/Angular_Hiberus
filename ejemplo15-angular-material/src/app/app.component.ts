import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estudios: string = '';
  estado: string = '';
  sexo: string = '';
  hobbiesCine:string = '';
  hobbiesTeatro:string = '';
  hobbiesMusica:string = '';
  habilitar:boolean = false;

  estadoCivil = ['Soltero', 'Casado', 'Viudo', 'Divorciado', 'Pareja de Hecho']

  nombres = [
    {nombre: 'Juan', color:'yellow'},
    {nombre: 'Maria', color:'orange'},
    {nombre: 'Luis', color:'blue'},
    {nombre: 'Andrea', color:'pink'},
    {nombre: 'Pablo', color:'green'},
    {nombre: 'Fernando', color:'silver'},
  ];

  mostrar(){
    console.log(this.sexo);
    console.log(this.estudios);
    console.log(this.estado);
    console.log(this.hobbiesCine);
    console.log(this.hobbiesTeatro);
    console.log(this.hobbiesMusica);
    console.log(this.habilitar);
  }
}
