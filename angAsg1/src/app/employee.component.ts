import { Component } from '@angular/core';
import { Employee }  from './model/employee.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './employee.html',
  styleUrls: ['./app.component.css']
})
export class EmployeeComponent implements OnInit {
  title = 'app';
  qaulifs:any[];
  experiences:any[];
  language:any[];
  submitted = false;
  model: Employee;

  printData(){
    console.log(JSON.parse(JSON.stringify(this.model)));
  }

  ngOnInit()  {
    this.model=new Employee();
    this.experiences=['0','1','2','3'];
    this.qaulifs=['BE','ME','MCA','BCA','PHD'];
  }
  
}



    
