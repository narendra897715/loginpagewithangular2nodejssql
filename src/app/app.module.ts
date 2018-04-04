import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import {EmployeeListComponent} from './employee/employeelist.component'
import {LoginComponent} from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,EmployeeListComponent,LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
