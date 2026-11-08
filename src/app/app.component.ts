import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SeoService } from './common/service/seo/seo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
  constructor(private readonly seoService: SeoService) {
  }
}
