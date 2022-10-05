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
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';

const misRutas: Routes = [
  {path:'home', component: HomeComponent},
  {path:'museos', component: MuseosComponent},
  {path:'museos/:id', component: DetalleMuseoComponent},
  {path:'restaurantes', component: RestaurantesComponent},
  {path:'equipo', component: EquipoComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'login', component: LoginComponent},
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
    ContactoComponent,
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
    SocialLoginModule,
    MatCardModule,
    MatButtonModule
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
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('370436452224-pejoknjnds348oboss4or12fp1skpjdd.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
