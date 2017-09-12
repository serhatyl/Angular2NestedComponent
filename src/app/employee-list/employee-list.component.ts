import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = [
    {
      name: 'Serhat',
      surname: 'Yılmaz'
    },
    {
      name: 'Steve',
      surname: 'Jobs'
    }
  ];

  constructor() { }

  getEmployees() {
    this.employees = [
      {
        code: 1,
        name: 'Serhat',
        surname: 'Yılmaz'
      },
      {
        code: 2,
        name: 'Steve',
        surname: 'Jobs'
      },
      {
        code: 3,
        name: 'Steve',
        surname: 'Woz'
      },
      {
        code: 4,
        name: 'Steve',
        surname: 'Woz'
      }
    ];
  }

  trackByEmpCode(index, employee) {
    return employee.code;
  }

  ngOnInit() {
  }

}
