import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemons: any = [];
  rutaSiguiente: string = '';
  rutaAnterior: string = '';
  nombre: string = '';
  pokemon: any;
  
  constructor(private pokemonService: PokemonService){

    this.pokemonService.getAll().subscribe((datos) => {
      this.pokemons = datos.results;
      this.rutaSiguiente = datos.next;
      this.rutaAnterior = datos.previous;
    });
  }

  solicitar(ruta:string){
    this.pokemonService.pedirPokemons(ruta).subscribe((datos) => {
      this.pokemons = datos.results;
      this.rutaSiguiente = datos.next;
      this.rutaAnterior = datos.previous;
    });
  }

  buscarPokemon(){
    this.pokemonService.buscar(this.nombre).subscribe((item) => {
      console.log(item);
      this.pokemon = item;
    });
  }

}
