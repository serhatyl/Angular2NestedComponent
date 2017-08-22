import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSize = 35;
  isItalic = true;
  isBold = true;
  pageHeader = 'Employee Details';
  imagePath = 'https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  firstName = 'Serhat';
  lastName = 'Yılmaz';
  btnIsDisabled = true;
  applyBoldClass = true;
  buttonClassToApply = 'italicClass boldClass';

  badQuery = '<script>Hacked by Serhat</script>';

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  addClasses() {
    let classes = {
      boldClass : true,
      italicClass : false
    };

    return classes;
  }

  addStyles() {
    let classes = {
      'font-size.px' : this.fontSize,
      'font-style' : this.isItalic ? 'italic' : 'normal',
      'font-weight' : this.isBold ? 'bold' : 'normal'
    };

    return classes;
  }

}
