import { Component } from '@angular/core';
import { LinkListItem } from '../../../common/model/ListItem';

@Component({
  selector: 'app-component',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  linkList: LinkListItem[] = [
    { linkUrl: 'https://github.com/tminasen', linkText: 'Github' },
    { linkUrl: 'https://twitter.com/tminasen', linkText: 'Twitter' },
    { linkUrl: 'https://tminasen.dev/', linkText: '個人ブログ' },
    { linkUrl: 'https://zenn.dev/tminasen', linkText: 'Zenn' },
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: 'はてなブログ(更新停止中)' },
    { linkUrl: 'https://qiita.com/tminasen', linkText: 'Qiita(更新停止中)' }
  ];

  constructor() {
  }

}
