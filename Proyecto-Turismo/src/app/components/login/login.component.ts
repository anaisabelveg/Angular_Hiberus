import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
