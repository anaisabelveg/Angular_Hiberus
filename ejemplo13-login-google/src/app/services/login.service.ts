import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly _authService: SocialAuthService) { }

  login(): Promise<SocialUser>{
    return this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): Promise<void>{
    return this._authService.signOut();
  }

  comprobarLogado(): Observable<SocialUser>{
    return this._authService.authState; // sin parentesis, es una propiedad
  }
}
