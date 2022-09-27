import { AgendaService } from './services/agenda.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  contactos: any = [];
  id: string = '';
  amigo: any = null;
  nombretxt: string = '';
  editar: boolean = false;

  amigoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern('[6-7]{1}[0-9]{8}')])
  });
  
  constructor(private agendaService: AgendaService){}

  public get nombre(){
    return this.amigoForm.get("nombre");
  }

  public get telefono(){
    return this.amigoForm.get("telefono");
  }

  mostrarFormulario(){
    this.editar = true;
    this.amigoForm.setValue({
      nombre: this.amigo.nombre,
      telefono: this.amigo.telefono
    });
  }

  guardarCambios(){
    this.agendaService.modificarAmigo(this.amigo.id, this.amigoForm.value)
      .then(() => {
          alert("Amigo modificado");
          this.amigoForm.reset();
          this.editar = false;
          this.nombretxt = '';
          this.amigo = null;
        })
      .catch((error)=> {
        console.log(error)
      });
  }

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
    this.agendaService.buscarPorNombre(this.nombretxt).subscribe((item) => {

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
