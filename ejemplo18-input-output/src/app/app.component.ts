import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mensaje: string = '';

  onMessage(msg: any){
    this.mensaje = msg;
  }

  ngOnInit(): void {
      
  }

  
}
