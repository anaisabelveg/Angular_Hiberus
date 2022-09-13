import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Anabel';
  apellido: string = 'Vegas';
  edad: number = 52;

  deshabilitado: boolean = true;

  estilo: string = '';

  constructor(){
    // Crear un temporizador que trancurridos 3 segundos
    // se habilite el boton
    //setTimeout(que_hacemos, tiempo)
    setTimeout(() => {
      this.deshabilitado = false;
    } , 3000);
  }

  saludar(): void{
    alert('Hola');
  }
}
