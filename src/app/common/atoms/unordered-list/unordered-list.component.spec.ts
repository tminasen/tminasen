import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UnorderedListComponent } from './unordered-list.component';

describe('UnorderedListComponent', () => {
  let component: UnorderedListComponent;
  let fixture: ComponentFixture<UnorderedListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UnorderedListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnorderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Given / When / Then
    expect(component).toBeTruthy();
  });

  describe('default inputs', () => {
    it('should initialize itemList, type, and size with default values when not provided', () => {
      // Given / When / Then
      expect(component.itemList).toEqual([]);
      expect(component.type).toBe('text');
      expect(component.size).toBe('none');
    });
  });
});
