import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string = "Esto es una prueba de pipes";
  numero: any = 8165432361.14876;
  porcentaje: number = 0.54397;
  importe: number = 6589.26578;
  
  persona: any = {nombre:'Pepito', apellido:'Perez', edad: 39,
          telefonos:{tel1:916549812, tel2:616123456}};

  // Diferentes formas de crear la fecha pero respetando mes/dia/año
  fecha: Date = new Date();
  //fecha: Date = new Date('12/31/2022');  
  //fecha: Date = new Date('2022-12-31');  // año,mes,dia con guiones
  //fecha:string = '12/31/2022';
  
}
