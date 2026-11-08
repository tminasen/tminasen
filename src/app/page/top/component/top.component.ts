import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TopComponent {

  constructor() {
  }
}
