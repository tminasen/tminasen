import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeadingModule } from '../../../common/atoms/heading/heading.module';
import { UnorderedListModule } from '../../../common/atoms/unordered-list/unordered-list.module';
import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HeadingModule,
        UnorderedListModule
      ],
      declarations: [LinksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Given / When / Then
    expect(component).toBeTruthy();
  });

  describe('linkList', () => {
    it('should have GitHub linkUrl as https://github.com/tminasen when initialized (T4)', () => {
      // Given
      const githubItem = component.linkList.find(item => item.linkText === 'Github');

      // When
      const linkUrl = githubItem?.linkUrl;

      // Then
      expect(githubItem).toBeDefined();
      expect(linkUrl).toBe('https://github.com/tminasen');
    });

    it('should render GitHub link href as https://github.com/tminasen in DOM when template is rendered (T5)', () => {
      // Given
      const nativeElement: HTMLElement = fixture.nativeElement;

      // When
      const anchor = nativeElement.querySelector<HTMLAnchorElement>('app-ul-component a');

      // Then
      expect(anchor).toBeTruthy();
      expect(anchor?.getAttribute('href')).toBe('https://github.com/tminasen');
    });
  });
});
