import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(email:string, pw:string): Promise<firebase.default.auth.UserCredential> {
    return this.angularFireAuth.signInWithEmailAndPassword(email,pw);
  }

  registro(email:string, pw:string): Promise<firebase.default.auth.UserCredential>{
    return this.angularFireAuth.createUserWithEmailAndPassword(email,pw);
  }

  logout(): Promise<void>{
    return this.angularFireAuth.signOut()
  }

  comprobar(): Observable<firebase.default.User | null>{
    return this.angularFireAuth.authState; // Sin parentesis, es una propiedad
  }
}
