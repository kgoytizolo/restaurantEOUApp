import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFollowUpComponent } from './follow-up.component';

describe('FollowUpComponent', () => {
  let component: OrdersFollowUpComponent;
  let fixture: ComponentFixture<OrdersFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersFollowUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
