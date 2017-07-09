import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class AppButton {
  showText = true;
  text: string = 'Secret Password = tuna';
  dates = [];

  onClick() {
    this.showText = !this.showText;
    this.dates.push(Date.now());
  }

  hasColorBackground() {
    if(this.dates.length > 4) {
      return 'blue';
    }
    return 'white';
  }
}
