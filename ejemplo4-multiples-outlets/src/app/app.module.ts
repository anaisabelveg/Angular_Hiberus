import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';
import { TresComponent } from './components/tres/tres.component';
import { RouterModule, Routes } from '@angular/router';
import { CuatroComponent } from './components/cuatro/cuatro.component';
import { CincoComponent } from './components/cinco/cinco.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Crear el array de rutas
const misRutas: Routes = [
  {path: 'c1', component: UnoComponent},
  {path: 'c2/:id', component: DosComponent, outlet: 'seccion1'},
  {path: 'c4', component: CuatroComponent, outlet: 'seccion1', children: [
    {path: 'c3', component: TresComponent, outlet: 'seccion2'},
    {path: 'c5', component: CincoComponent, outlet: 'seccion2'}
  ]},
  
];

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    CuatroComponent,
    CincoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
