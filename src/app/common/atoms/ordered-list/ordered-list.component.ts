import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
    selector: 'app-ol-component',
    templateUrl: './ordered-list.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderedListComponent {
  @Input() itemList: LinkListItem[] = [];

}
