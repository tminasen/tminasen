import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LinkListItem } from '../../../../common/model/ListItem';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProfileComponent {
  linkList: LinkListItem[] = [
    {
      linkText: 'Github',
      linkUrl: 'https://github.com/tminasen',
      icon: 'assets/link/github-mark.svg',
    },
    {
      linkText: 'X',
      linkUrl: 'https://twitter.com/tminasen',
      icon: 'assets/link/x-logo.png',
    },
    {
      linkText: 'zenn',
      linkUrl: 'https://zenn.dev/tminasen',
      icon: 'assets/link/zenn-logo-icon.png'
    }
  ];

  constructor() {
  }

}
