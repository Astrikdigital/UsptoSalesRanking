import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamStructureModalComponent } from './edit-team-structure-modal.component';

describe('EditTeamStructureModalComponent', () => {
  let component: EditTeamStructureModalComponent;
  let fixture: ComponentFixture<EditTeamStructureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTeamStructureModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTeamStructureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
