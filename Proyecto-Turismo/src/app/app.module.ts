import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MuseosComponent } from './components/museos/museos.component';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetalleMuseoComponent } from './components/detalle-museo/detalle-museo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';


const misRutas: Routes = [
  {path:'home', component: HomeComponent},
  {path:'museos', component: MuseosComponent},
  {path:'museos/:id', component: DetalleMuseoComponent},
  {path:'restaurantes', component: RestaurantesComponent},
  {path:'equipo', component: EquipoComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MuseosComponent,
    EquipoComponent,
    DetalleMuseoComponent,
    RestaurantesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    GoogleMapsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    AngularFirestore, 
    MatPaginatorIntl,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('862431741831866')
          }
        ]
      } as SocialAuthServiceConfig
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
