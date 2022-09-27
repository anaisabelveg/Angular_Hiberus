import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  registro: boolean = false;  // true->registro, false->login
  email:string = '';
  pw:string = '';
  conf_pw:string = '';
  estoyLogado: boolean = false;
  emailValidado: any = '';

  constructor(private loginService: LoginService){}

  logout(){
    this.loginService.logout().then(() => {
      alert("Session cerrada");
      this.estoyLogado = false;
    }, (error) => {
      console.log(error);
      alert("No se pudo cerrar la session");
    })
  }

  login(){
    this.loginService.login(this.email, this.pw).then(() => {
      alert("Usuario autenticado");
      this.estoyLogado = true;
    }, (error) => {
      console.log(error);
      alert("Usuario no encontrado");
    });
  }

  registrar(){
    if (this.pw == this.conf_pw){
      this.loginService.registro(this.email, this.pw).then(()=> {
        alert("Usuario registrado");
      }, (error) => {
        console.log(error);
        alert("Usuario no registrado");
      })
    } else {
      alert("Los pw no coinciden");
    }
  }

  comprobarLogado(){
    this.loginService.comprobar().subscribe((dato) => {
      console.log(dato);
      this.emailValidado = dato!.email;
    })
  }
}
