import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: string = '';
  idioma: string = "es";

  constructor(private translateService: TranslateService, private loginService: LoginService) { 
    this.translateService.use(this.idioma);
  }

  cambiarIdioma(nuevoIdioma: string): void{
    this.idioma = nuevoIdioma;
    this.translateService.use(this.idioma);
  }

  login(){
    this.loginService.login().then((info) => {
      this.usuario = info.firstName;
    });
  }

  logout(){
    this.loginService.logout().then(() => {  // No recibo ningun dato por ser Promise<void>
      
      this.loginService.comprobarLogado().subscribe((dato)=>{
        if (dato == null){
          alert("Session cerrada");
          this.usuario = '';
        }
      });
    });
  }

  ngOnInit(): void {  
  }

}
