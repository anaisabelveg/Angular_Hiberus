import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: string = '';

  constructor(private loginService: LoginService){}

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

}
