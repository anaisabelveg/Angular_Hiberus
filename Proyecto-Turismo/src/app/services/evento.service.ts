import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  evento$ = new Subject<any>();

  constructor() { }
}
