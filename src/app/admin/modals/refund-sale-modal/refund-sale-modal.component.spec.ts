import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSaleModalComponent } from './refund-sale-modal.component';

describe('RefundSaleModalComponent', () => {
  let component: RefundSaleModalComponent;
  let fixture: ComponentFixture<RefundSaleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundSaleModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundSaleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
