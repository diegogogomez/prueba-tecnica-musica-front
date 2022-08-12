import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { TableComponent } from './component/table/table.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateComponent } from './page/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    NavbarComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
