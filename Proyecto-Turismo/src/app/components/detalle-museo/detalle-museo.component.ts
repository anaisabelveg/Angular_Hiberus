import { Museo } from 'src/app/models/museo';
import { MuseosService } from 'src/app/services/museos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-detalle-museo',
  templateUrl: './detalle-museo.component.html',
  styleUrls: ['./detalle-museo.component.css']
})
export class DetalleMuseoComponent implements OnInit {

  museo?: Museo;

  zoom: number = 14;
  center: google.maps.LatLngLiteral = {
    lat: 41.6369216,
    lng:  -0.8996619
  };
  opciones: google.maps.MapOptions = {
    // hybrid, satellite, roadmap, terrain
    mapTypeId: 'roadmap'
  }

  constructor(private ruta: ActivatedRoute, private museosSerice: MuseosService) {
      this.museo = this.museosSerice.buscarMuseo(this.ruta.snapshot.params['id']);
      console.log(this.museo);
      this.center = {
        lat: this.museo!.coordenadas[0],
        lng: this.museo!.coordenadas[1] 
      }
  }

  ngOnInit(): void {
  }

}
