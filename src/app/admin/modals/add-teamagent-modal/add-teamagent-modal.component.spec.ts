import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamagentModalComponent } from './add-teamagent-modal.component';

describe('AddTeamagentModalComponent', () => {
  let component: AddTeamagentModalComponent;
  let fixture: ComponentFixture<AddTeamagentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTeamagentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamagentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
