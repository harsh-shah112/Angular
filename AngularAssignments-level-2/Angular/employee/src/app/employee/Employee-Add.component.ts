import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './Employee-Add.component.html',  
})
export class EmployeeAddComponent implements OnInit {

  pageTitle = 'Form';
  qualifications: string[];
  experiences: string[];
  empData: IEmployee;
  id: number;

  constructor(private route: ActivatedRoute, 
              private empService: EmployeeService,
              private router: Router) { }
  ngOnInit() {
    this.qualifications = ['BE', 'ME', 'BCA','MCA','PHD'];
    this.experiences = ['0','1', '2','3'];
    this.route.params.subscribe(params => { this.id = +params['id'] });
    this.check(this.id);
  }
  check(id) {
    if (id !== -1) {
      this.pageTitle = 'Update Employee';
      this.empData = this.empService.getEmp(id);
    } else {
      this.empData = new Employee();
    }
  }

  printdata() {
    if (this.id === -1) {
      this.empService.addEmp(this.empData);
    } else {
      this.empService.updateEmp(this.empService.getEmp(+this.id), this.empData);
    }
    this.router.navigate(['/employees']);
  }
}
