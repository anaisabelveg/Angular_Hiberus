import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  usuario: string = '';

  subscripcion: Subscription;

  idioma: string = "es";

  constructor(private translateService: TranslateService, private loginService: LoginService, 
      private eventoService: EventoService) { 
    this.translateService.use(this.idioma);

    this.subscripcion = this.eventoService.evento$.subscribe($event => {
      this.doSomething($event);
    });
  }

 
  doSomething($event: any): void {
    //this.app.tick();
    console.log($event);
    this.usuario = $event;
  }

  cambiarIdioma(nuevoIdioma: string): void{
    this.idioma = nuevoIdioma;
    this.translateService.use(this.idioma);
  }

  // login(){
  //   this.loginService.login().then((info) => {
  //     this.usuario = info.firstName;
  //   });
  // }

  // logout(){
  //   this.loginService.logout().then(() => {  // No recibo ningun dato por ser Promise<void>
      
  //     this.loginService.comprobarLogado().subscribe((dato)=>{
  //       if (dato == null){
  //         alert("Session cerrada");
  //         this.usuario = '';
  //       }
  //     });
  //   });
  // }

  ngOnInit(): void {  
  }

}
