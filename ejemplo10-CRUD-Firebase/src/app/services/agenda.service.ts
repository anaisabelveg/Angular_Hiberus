import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private angularFirestore: AngularFirestore) { }

  public todosAmigos(): Observable<DocumentChangeAction<unknown>[]>{
    return this.angularFirestore.collection("agenda").snapshotChanges();
  }

  public buscarAmigo(id: string): Observable<any>{
    return this.angularFirestore.collection('agenda').doc(id).snapshotChanges();
  }

  // https://firebase.google.com/docs/firestore/query-data/queries#execute_a_query
  public buscarPorNombre(nombre: string): Observable<DocumentChangeAction<unknown>[]> {
    return this.angularFirestore
      .collection('agenda', (ref) => ref.where('nombre', '==', nombre))
      .snapshotChanges();
  }

  public eliminarAmigo(id: string){
    return this.angularFirestore.collection('agenda').doc(id).delete();
  }

  public nuevoAmigo(nuevo: any){
    return this.angularFirestore.collection('agenda').add(nuevo);
  }
}
