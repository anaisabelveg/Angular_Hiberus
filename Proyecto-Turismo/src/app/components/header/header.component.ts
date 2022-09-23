import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idioma: string = "es";

  constructor(private translateService: TranslateService) { 
    this.translateService.use(this.idioma);
  }

  cambiarIdioma(nuevoIdioma: string): void{
    this.idioma = nuevoIdioma;
    this.translateService.use(this.idioma);
  }

  ngOnInit(): void {
  }

}
