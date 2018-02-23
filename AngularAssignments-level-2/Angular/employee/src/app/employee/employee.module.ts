import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';
import { EmployeeAddComponent } from './Employee-Add.component';
import { EmployeeEditComponent } from './Employee-edit.component';
import { EmployeeListComponent } from './Employee-list.component';

@NgModule({
imports:[FormsModule,BrowserModule,RouterModule.forChild([
{
 path: 'employees',
  children:[ {
   path: ':id/Add',
   component: EmployeeAddComponent
  },
  {
   path: '',
   component: EmployeeListComponent
  },                   
   {
    path: ':id/edit',
    component: EmployeeEditComponent
   }                    
] } ])],
declarations:[
EmployeeAddComponent,
EmployeeEditComponent,
EmployeeListComponent,
],
providers: [ EmployeeService ] 
})
export class EmployeeModule {}