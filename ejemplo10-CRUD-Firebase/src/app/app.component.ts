import { AgendaService } from './services/agenda.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  contactos: any = [];
  id: string = '';
  amigo: any;
  nombre: string = '';

  amigoForm = new FormGroup({
    nombre: new FormControl(''),
    telefono: new FormControl('')
  });
  
  constructor(private agendaService: AgendaService){}

  alta(){
    this.agendaService.nuevoAmigo(this.amigoForm.value).then(() => {
      alert("Amigo guardado");

      // Limpiar el formulario
      this.amigoForm.reset();
    }, (error) => {
      console.log(error);
    });
  }

  buscarPorNombre() {
    this.agendaService.buscarPorNombre(this.nombre).subscribe((item) => {

      item.forEach(cont => {
        let datos: any = cont.payload.doc.data();
        this.amigo = {id: cont.payload.doc.id, nombre: datos.nombre, telefono: datos.telefono};
      });    
    });
  }
  
  buscar(): void{
    this.agendaService.buscarAmigo(this.id).subscribe((item) => {
      this.amigo = item.payload.data()
    })
  }

  borrar(id: string):void{
    if (window.confirm("Estas seguro de eliminarlo? ")){
      this.agendaService.eliminarAmigo(id).then(() => {
        alert("Contacto eliminado");
      }, (error)=> {
        console.log(error);
      });
    } else {
      alert("Operacion cancelada");
    }
  }

  ngOnInit(): void {
      this.agendaService.todosAmigos().subscribe((datos) => {
        // limpio el array de contactos
        this.contactos = [];

        datos.forEach(item => {
          let datos: any = item.payload.doc.data();
          this.contactos.push({id:item.payload.doc.id, nombre: datos.nombre, telefono: datos.telefono});
        });

        console.log(this.contactos);     
      });
  }
}
