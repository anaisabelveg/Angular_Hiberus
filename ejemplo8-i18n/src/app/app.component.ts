import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  idioma: string = 'es';

  constructor(private translateService: TranslateService){
    // Obtener el idioma del navegador devuelve es-ES
    // console.log(navigator.language);
    // this.idioma = navigator.language;

    // Obtener el idioma del navegador, solo idioma es
    console.log(translateService.getBrowserLang());
    this.idioma = translateService.getBrowserLang() || 'es';

    this.translateService.use(this.idioma);
  }

  cambiarIdioma(nuevoIdioma: string): void{
    this.idioma = nuevoIdioma;
    this.translateService.use(this.idioma);
  }
}
