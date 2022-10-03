import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estudios = new FormControl('');

  nombres = [
    {nombre: 'Juan', color:'yellow'},
    {nombre: 'Maria', color:'orange'},
    {nombre: 'Luis', color:'blue'},
    {nombre: 'Andrea', color:'pink'},
    {nombre: 'Pablo', color:'green'},
    {nombre: 'Fernando', color:'silver'},
  ];
}
