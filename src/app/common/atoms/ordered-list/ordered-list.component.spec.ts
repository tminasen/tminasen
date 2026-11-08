import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OrderedListComponent } from './ordered-list.component';

describe('OrderedListComponent', () => {
  let component: OrderedListComponent;
  let fixture: ComponentFixture<OrderedListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OrderedListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Given / When / Then
    expect(component).toBeTruthy();
  });

  describe('default inputs', () => {
    it('should initialize itemList as empty array when not provided', () => {
      // Given / When / Then
      expect(component.itemList).toEqual([]);
    });
  });
});
