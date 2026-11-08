import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeadingModule } from '../../../../common/atoms/heading/heading.module';
import { UnorderedListModule } from '../../../../common/atoms/unordered-list/unordered-list.module';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HeadingModule,
        UnorderedListModule
      ],
      declarations: [ProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Given / When / Then
    expect(component).toBeTruthy();
  });

  describe('linkList', () => {
    it('should have GitHub linkUrl as https://github.com/tminasen when initialized (T1)', () => {
      // Given
      const githubItem = component.linkList.find(item => item.linkText === 'Github');

      // When
      const linkUrl = githubItem?.linkUrl;

      // Then
      expect(githubItem).toBeDefined();
      expect(linkUrl).toBe('https://github.com/tminasen');
    });

    it('should render GitHub link href as https://github.com/tminasen in DOM when template is rendered (T2)', () => {
      // Given
      const nativeElement: HTMLElement = fixture.nativeElement;

      // When
      const anchor = nativeElement.querySelector<HTMLAnchorElement>('.profile__link a');

      // Then
      expect(anchor).toBeTruthy();
      expect(anchor?.getAttribute('href')).toBe('https://github.com/tminasen');
    });

    it('should have relative asset paths starting with assets/ for all icons when initialized (T3 / P2)', () => {
      // Given
      const linkList = component.linkList;

      // When & Then
      expect(linkList.length).toBeGreaterThan(0);
      linkList.forEach(item => {
        expect(item.icon).toBeDefined();
        expect(item.icon!.startsWith('assets/')).toBeTrue();
        expect(item.icon!.startsWith('/')).toBeFalse();
        expect(item.icon!.startsWith('http')).toBeFalse();
      });
    });
  });
});
