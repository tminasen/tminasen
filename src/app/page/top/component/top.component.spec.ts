import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeadingModule } from '../../../common/atoms/heading/heading.module';
import { UnorderedListModule } from '../../../common/atoms/unordered-list/unordered-list.module';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/skill.component';
import { TopComponent } from './top.component';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HeadingModule,
        UnorderedListModule
      ],
      declarations: [
        TopComponent,
        ProfileComponent,
        SkillComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Given / When / Then
    expect(component).toBeTruthy();
  });
});
