import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStructureComponent } from './team-structure.component';

describe('TeamStructureComponent', () => {
  let component: TeamStructureComponent;
  let fixture: ComponentFixture<TeamStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
