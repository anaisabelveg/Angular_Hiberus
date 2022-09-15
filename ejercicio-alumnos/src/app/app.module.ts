import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { RouterModule, Routes } from '@angular/router';

const misRutas: Routes = [
  {path:'lista', component: ListaComponent},
  {path:'detalle/:nombre', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
