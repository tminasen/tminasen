import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  public isMenuOpened = false;

  public closeDialog() {
    this.isMenuOpened = false;
  }

}
