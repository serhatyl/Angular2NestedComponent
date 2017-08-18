import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader = 'Employee Details';
  imagePath = 'https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  firstName = 'Serhat';
  lastName = 'Yılmaz';

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

}
