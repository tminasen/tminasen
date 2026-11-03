import { Component, Input } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
  selector: 'app-ol-component',
  templateUrl: './ordered-list.component.html'
})
export class OrderedListComponent {
  @Input() itemList: LinkListItem[];

}
