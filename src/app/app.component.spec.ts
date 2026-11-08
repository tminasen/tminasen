import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterModule } from './common/component/footer/footer.module';
import { HeadingModule } from './common/atoms/heading/heading.module';
import { SeoService } from './common/service/seo/seo.service';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        FooterModule,
        HeadingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      providers: [
        SeoService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    // Given
    const fixture = TestBed.createComponent(AppComponent);

    // When
    const app = fixture.debugElement.componentInstance;

    // Then
    expect(app).toBeTruthy();
  });
});
