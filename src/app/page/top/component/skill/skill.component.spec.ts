import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeadingModule } from '../../../../common/atoms/heading/heading.module';
import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HeadingModule],
      declarations: [SkillComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Given / When / Then
    expect(component).toBeTruthy();
  });

  describe('skill icon asset paths (T6 / P2)', () => {
    it('should have relative asset paths starting with assets/ for all frontend and backend skills when initialized', () => {
      // Given
      const allSkills = [...component.frontendSkillList, ...component.backendSkillList];

      // When & Then
      expect(allSkills.length).toBeGreaterThan(0);
      allSkills.forEach(item => {
        expect(item.icon.startsWith('assets/')).toBeTrue();
        expect(item.icon.startsWith('/')).toBeFalse();
        expect(item.icon.startsWith('http')).toBeFalse();
      });
    });
  });
});
