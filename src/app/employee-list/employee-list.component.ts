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

  ngOnInit() {
  }

}
