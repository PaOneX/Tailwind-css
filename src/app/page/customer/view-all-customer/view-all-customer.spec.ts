import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCustomer } from './view-all-customer';

describe('ViewAllCustomer', () => {
  let component: ViewAllCustomer;
  let fixture: ComponentFixture<ViewAllCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
