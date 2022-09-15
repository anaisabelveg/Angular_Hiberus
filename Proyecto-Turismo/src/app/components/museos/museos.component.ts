import { Component, OnInit } from '@angular/core';
import { Museo } from 'src/app/models/museo';
import { MuseosService } from 'src/app/services/museos.service';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent implements OnInit {

  museos: Museo[] = [];

  constructor(private museosService: MuseosService) { 
    this.museos = this.museosService.getAll();
  }

  ngOnInit(): void {
  }

}
