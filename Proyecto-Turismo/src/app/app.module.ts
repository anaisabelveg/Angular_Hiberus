import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MuseosComponent } from './components/museos/museos.component';
import { RouterModule, Routes } from '@angular/router';

const misRutas: Routes = [
  {path:'home', component: HomeComponent},
  {path:'museos', component: MuseosComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MuseosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
