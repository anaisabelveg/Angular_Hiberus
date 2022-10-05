import { Injectable } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginFacebookService {

  constructor(private socialAuthService: SocialAuthService) { 
  }

  login(): Promise<SocialUser>{
    return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

  logout(): Promise<void>{  // Devuelve una promesa sin datos
    return this.socialAuthService.signOut();
  }

  comprobarLogado(): Observable<SocialUser>{
    return this.socialAuthService.authState; // sin parentesis, es una propiedad
  }
}
