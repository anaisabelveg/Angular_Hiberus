import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  texto: string = '';

  @Output()
  evento = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
      this.evento.emit("Hola, soy tu hijo");
  }
}
