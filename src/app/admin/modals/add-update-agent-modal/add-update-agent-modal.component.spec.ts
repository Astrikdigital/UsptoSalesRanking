import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateAgentModalComponent } from './add-update-agent-modal.component';

describe('AddUpdateAgentModalComponent', () => {
  let component: AddUpdateAgentModalComponent;
  let fixture: ComponentFixture<AddUpdateAgentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateAgentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateAgentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
