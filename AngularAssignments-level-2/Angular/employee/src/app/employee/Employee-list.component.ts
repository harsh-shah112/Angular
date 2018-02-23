import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'ema-employee-list',
  templateUrl: './Employee-list.component.html',
  
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];  
  empList;
  delConfirm;
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {    
    this.empList = JSON.parse(this.employeeService.getAllEmp());
    this.employees = [];
    if (this.empList != null) {    
      for (let emp of this.empList) {
        this.employees.push(JSON.parse(emp));
      }
      this.filteredEmployees = this.employees;
    }
    
  }
deleteEmp(id)
{
    this.delConfirm = confirm('Do you want to delete this id?');
    if (this.delConfirm)
     {
      this.employeeService.deleteEmp(this.employeeService.getEmp(+id));
      window.location.reload(true);
    }
} 
  }
}
