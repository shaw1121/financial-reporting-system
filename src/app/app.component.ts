import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'frs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'financial-reporting-system';

  login = false;

  ngAfterContentChecked() {
    if (window.location.href == 'http://localhost:4200/index') {
      this.login = true;
    }
  }

}
