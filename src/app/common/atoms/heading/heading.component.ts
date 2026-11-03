import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() text: string;
  @Input() level: '1' | '2' | '3' | '4' = '1';
  @Input() color: 'black' | 'white' = 'black';
  @Input() isHidden = false;
  @Input() ariaHidden: boolean | undefined;

  headingClass: string[] = [];

  ngOnInit() {
    if (this.isHidden) {
      this.headingClass.push('hidden');
    }

    switch (this.level) {
      case '1':
        this.headingClass.push('heading-1');
        break;
      case '2':
        this.headingClass.push('heading-2');
        break;
      case '3':
        this.headingClass.push('heading-3');
        break;
      case '4':
        this.headingClass.push('heading-4');
        break;
      default:
        const invalidValue: never = this.level;
        console.error(`${invalidValue} is invalid level.`);
    }

    switch (this.color) {
      case 'black':
        this.headingClass.push('heading-black');
        break;
      case 'white':
        this.headingClass.push('heading-white');
        break;
      default:
        const invalidValue: never = this.color;
        console.error(`${invalidValue} is invalid color`);
    }
  }

}
