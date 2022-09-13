import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotaDirective } from './directivas/nota.directive';
import { PintarDirective } from './directivas/pintar.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotaDirective,
    PintarDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
