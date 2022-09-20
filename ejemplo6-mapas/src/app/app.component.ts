import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  zoom: number = 14;
  center: google.maps.LatLngLiteral = {
    lat: 41.6369216,
    lng:  -0.8996619
  };
  opciones: google.maps.MapOptions = {
    // hybrid, satellite, roadmap, terrain
    mapTypeId: 'roadmap'
  }
  
  nombre: string="Hiberus";
  icono:string = "https://img.icons8.com/clouds/2x/user-location.png";

  ngOnInit(){
    // Obtener la ubicacion actual
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });
  }


  // const loader = new Loader({
  //   apiKey: "YOUR_API_KEY",
  //   version: "weekly",
  //   ...additionalOptions,
  // });
  
  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });
}
