import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Card1Component } from './card1/card1.component';
import { PrecedentComponent } from './precedent/precedent.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';
import { Card9Component } from './card9/card9.component'
import { Card4v2Component } from './card4v2/card4v2.component';
import { Card6v2Component } from './card6v2/card6v2.component';
import { Card7v2Component } from './card7v2/card7v2.component';
import { Card8v2Component } from './card8v2/card8v2.component';
import { Card9v2Component } from './card9v2/card9v2.component';
import { Card10v2Component } from './card10v2/card10v2.component';
import { Card11v2Component } from './card11v2/card11v2.component';
import { Card7v3Component } from './card7v3/card7v3.component';
import { Card9v3Component } from './card9v3/card9v3.component';
import { Card10v3Component } from './card10v3/card10v3.component';
import { Card12v3Component } from './card12v3/card12v3.component';
import { Card13v3Component } from './card13v3/card13v3.component';
import { Card14v3Component } from './card14v3/card14v3.component';
import { Card15v3Component } from './card15v3/card15v3.component';
import { Card16v3Component } from './card16v3/card16v3.component';
import { Card17v3Component } from './card17v3/card17v3.component';
import { Card18v3Component } from './card18v3/card18v3.component';
import { RouterModule } from '@angular/router';
import { EstimezComponent } from './estimez/estimez.component';
import { Card11v3Component } from './card11v3/card11v3.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Card1Component,
    PrecedentComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Card8Component, 
    Card4v2Component,
    Card6v2Component,
    Card7v2Component,
    Card8v2Component,
    Card9v2Component,
    Card10v2Component,
    Card11v2Component,
    Card7v3Component,
    Card9v3Component,
    Card10v3Component,
    Card12v3Component,
    Card13v3Component,
    Card14v3Component,
    Card15v3Component,
    Card16v3Component,
    Card17v3Component,
    Card18v3Component,
    EstimezComponent,
    Card11v3Component,
    ConnexionComponent,
    Card9Component,
    TestComponent,
    AuthentificationComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],

 
  bootstrap: [AppComponent]
})
export class AppModule { }
