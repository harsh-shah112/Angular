import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
   EmployeeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
