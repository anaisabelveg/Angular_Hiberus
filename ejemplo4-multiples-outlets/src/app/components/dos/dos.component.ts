import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { 
    console.log(this.ruta.snapshot.params['id']);
  }

  ngOnInit(): void {
  }

}
