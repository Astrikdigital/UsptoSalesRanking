import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSalesComponent } from './agent-sales.component';

describe('AgentSalesComponent', () => {
  let component: AgentSalesComponent;
  let fixture: ComponentFixture<AgentSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
