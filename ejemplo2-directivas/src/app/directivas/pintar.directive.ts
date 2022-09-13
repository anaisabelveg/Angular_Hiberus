import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPintar]'
})
export class PintarDirective implements OnInit{

  @Input('appPintar')
  comportamiento: string = '';

  // Aprovechamos el constructor para inyectar dependencias necesarias
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      if (this.comportamiento == 'bueno'){
        // Renderizamos el elemento recibido modificando su estilo
        // letra: color azul, tamaño letra: grande, color de fondo: gris

        // opcion 1
        /*
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
        this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', 'x-large');
        this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'silver');
        */

        // opcion 2 -> conserva el class anterior y agrega nueva clase
        // this.renderer.addClass(this.elRef.nativeElement, 'resaltar');

        // opcion 3 -> machaca el class anterior
        this.renderer.setAttribute(this.elRef.nativeElement, 'class', 'resaltar');
      }
  }
}
