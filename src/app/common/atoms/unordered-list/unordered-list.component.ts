import { Component, Input, OnInit } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
  selector: 'app-ul-component',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.scss']
})
export class UnorderedListComponent implements OnInit {
  @Input() itemList: LinkListItem[];
  @Input() type: 'text' | 'icon';
  @Input() size: 'small' | 'large' | 'none';
  @Input() styles: 'none' | 'dot' | 'triangle' = 'none';
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  listClass: string[] = ['list'];
  itemClass: string[] = [];
  iconClass: string[] = [];

  ngOnInit(): void {
    switch (this.size) {
      case 'small':
        this.iconClass.push('list__small-icon');
        break;
      case 'large':
        this.iconClass.push('list__large-icon');
        break;
      case 'none':
        break;
      default:
        const invalidSize: never = this.size;
        console.error(`${invalidSize} is invalid`);
    }
    switch (this.direction) {
      case 'horizontal':
        this.listClass.push('list--horizontal');
        break;
      case 'vertical':
        this.listClass.push('list--vertical');
        break;
      default:
        const invalidDirection: never = this.direction;
        console.error(`${invalidDirection} is invalid`);
    }
    switch (this.styles) {
      case 'dot':
        break;
      case 'triangle':
        this.itemClass.push('list__item--triangle');
        break;
      case 'none':
        break;
      default:
        const invalidStyle: never = this.styles;
        console.error(`${invalidStyle} is invalid`);
    }
  }
}
