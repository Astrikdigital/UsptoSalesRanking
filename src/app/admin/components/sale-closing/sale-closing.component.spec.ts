import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleClosingComponent } from './sale-closing.component';

describe('SaleClosingComponent', () => {
  let component: SaleClosingComponent;
  let fixture: ComponentFixture<SaleClosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleClosingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
