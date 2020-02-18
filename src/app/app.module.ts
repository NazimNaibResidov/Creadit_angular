import { CreaditlistComponent } from './compoents/creaditlist/creaditlist.component';
import { CreditService } from './services/credit.service';
import { PersonService } from './services/person.service';
import { MainService } from './services/main.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Route,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { CreditComponent } from './compoents/credit/credit.component';

import { PersonlistComponent } from './compoents/personlist/personlist.component';
import { ErrorComponent } from './compoents/error/error.component';

const routing:Route[]=[
  
  {
    path:'person',
    component:PersonlistComponent
  },
 
  {
    path:'credit',
    component: CreaditlistComponent
  },
  {
    path:'Creat',
    component:CreditComponent
  },{
    path:"**",
    component:ErrorComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    
    CreditComponent,
    CreaditlistComponent,
    PersonlistComponent,
    ErrorComponent
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routing)
  ],
  providers: [MainService,PersonService,CreditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
