import { Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  firstname = 'Tom';
  lastname = 'Jerry';
  gender = 'Male';
  age = 20;
}
