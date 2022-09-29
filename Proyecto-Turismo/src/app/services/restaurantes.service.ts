import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private angularFirestore: AngularFirestore) { }

  public consultarTodos(): Observable<DocumentChangeAction<unknown>[]>{
    return this.angularFirestore.collection("restaurantes").snapshotChanges();
  }
}
