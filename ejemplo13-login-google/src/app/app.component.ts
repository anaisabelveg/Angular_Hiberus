import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  user: SocialUser | undefined;

  constructor(private loginService: LoginService){}

  logout(){
    this.loginService.logout().then(() => {  
      alert("Session cerrada");
    });
  }

  ngOnInit() {
    this.loginService.comprobarLogado().subscribe((user) => {
      this.user = user;
    });
  }
}
