import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = [
    {
      code: 1,
      name: 'Serhat',
      surname: 'Yılmaz',
      birthDate: '3/12/2016',
      sallary: 2300
    },
    {
      code: 2,
      name: 'Steve',
      surname: 'Jobs',
      birthDate: '1/6/2016',
      sallary: 1500
    }
  ];

  constructor() { }

  getEmployees() {
    this.employees = [
      {
        code: 1,
        name: 'Serhat',
        surname: 'Yılmaz',
        birthDate: '3/12/2016',
        sallary: 2300
      },
      {
        code: 2,
        name: 'Steve',
        surname: 'Jobs',
        birthDate: '1/6/2016',
        sallary: 1500
      },
      {
        code: 3,
        name: 'Steve',
        surname: 'Woz',
        birthDate: '3/3/2016',
        sallary: 1600
      },
      {
        code: 4,
        name: 'Steve',
        surname: 'Woz',
        birthDate: '2/2/2016',
        sallary: 4000
      }
    ];
  }

  trackByEmpCode(index, employee) {
    return employee.code;
  }

  ngOnInit() {
  }

}
