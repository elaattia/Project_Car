import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';
import { Card9Component } from './card9/card9.component';
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
import { NotFoundError } from 'rxjs';
import { EstimezComponent } from './estimez/estimez.component';
import { Card11v3Component } from './card11v3/card11v3.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: 'card1', pathMatch: 'full' },
  {path :'login', component:LoginComponent},
  {path :'logout',component:LogoutComponent},
  {path : 'profile',component:ProfileComponent},
  {path :' autho',component:AuthentificationComponent},
  { path: 'card1', component: Card1Component },
  { path: 'card2', component: Card2Component },
  { path: 'card3', component: Card3Component },
  { path: 'card4', component: Card4Component },
  { path: 'card5', component: Card5Component },
  { path: 'card6', component: Card6Component },
  { path: 'card7', component: Card7Component },
  { path: 'card8', component: Card8Component },
  { path: 'card9', component: Card9Component },
  { path: 'card4v2', component: Card4v2Component },
  { path: 'card6v2', component: Card6v2Component },
  { path: 'card7v2', component: Card7v2Component },
  { path: 'card8v2', component: Card8v2Component },
  { path: 'card9v2', component: Card9v2Component },
  { path: 'card10v2', component: Card10v2Component },
  { path: 'card11v2', component: Card11v2Component },
  { path: 'card7v3', component: Card7v3Component },
  { path: 'card9v3', component: Card9v3Component },
  { path: 'card10v3', component: Card10v3Component },
  { path: 'card11v3', component: Card11v3Component },
  { path: 'card12v3', component: Card12v3Component },
  { path: 'card13v3', component: Card13v3Component },
  { path: 'card14v3', component: Card14v3Component },
  { path: 'card15v3', component: Card15v3Component },
  { path: 'card16v3', component: Card16v3Component },
  { path: 'card17v3', component: Card17v3Component },
  { path: 'card18v3', component: Card18v3Component },
  { path: 'estimez', component: EstimezComponent },
  { path: '**', component: NotFoundError },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
