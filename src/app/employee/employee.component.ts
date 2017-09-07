import { Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  columnSpan = 2;
  firstname = 'Tom';
  lastname = 'Jerry';
  gender = 'Male';
  age = 20;
  showDetails = false;


  toggleDetails(): void {
    this.showDetails = !this.showDetails;
    console.log(this.showDetails);
  }
}
