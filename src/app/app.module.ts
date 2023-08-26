import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const routes:Routes=[
  {path:'',redirectTo:'/view',pathMatch:'full'},
  {path:'view',component:ViewClientComponent},
  {path:'add',component:AddClientComponent},
  {path:'edit/:id',component:EditClientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ViewClientComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
