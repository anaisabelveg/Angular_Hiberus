import { EventoService } from './../../services/evento.service';
import { LoginGoogleService } from './../../services/login-google.service';
import { LoginFacebookService } from './../../services/login-facebook.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginserviceFacebook: LoginFacebookService, 
      private loginserviceGoogle: LoginGoogleService, private eventoService: EventoService ) { }


  loginFacebook(){
    this.loginserviceFacebook.login().then((info) => {
      //this.evento.emit(info.firstName);
      this.eventoService.evento$.next(info.firstName);
    });
  }

  loginGoogle(){

  }

  loginFirebase(){

  }

  ngOnInit(): void {
  }

}
