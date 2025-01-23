import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { NgFor, CommonModule } from '@angular/common';
import { AddTeamagentModalComponent } from '../../modals/add-teamagent-modal/add-teamagent-modal.component';
import { EditTeamStructureModalComponent } from '../../modals/edit-team-structure-modal/edit-team-structure-modal.component';
import { ConfirmationModalComponent } from '../../modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-team-structure',
  imports: [NgFor, CommonModule],
  templateUrl: './team-structure.component.html',
  styleUrl: './team-structure.component.css'
})
export class TeamStructureComponent {


  public data: any = []

  constructor(private httpService: HttpApiService, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getTeamStructure();
  }


  async getTeamStructure() {
    let res: any = await this.httpService.getTeamStructure();
    this.data = res
    console.log(this.data);
  }

  addTeamAgent() {
    let modal = this.dialog.open(AddTeamagentModalComponent, {
      panelClass: 'agentsale',
      width: '860px',
      height: '500px'
    })
    modal.afterClosed().subscribe(async (result) => {
      debugger
      if (result.IsSuccess) {
        this.getTeamStructure();
      }
    })

  }
  editTeamStructure(rowData: any) {
    let modal = this.dialog.open(EditTeamStructureModalComponent, {
      data: rowData,
      panelClass: 'agentsale',
      width: '860px',
      height: '500px'
    })
    modal.afterClosed().subscribe(async (result) => {
      if (result.IsSuccess) {
        this.getTeamStructure();
      }
    })
  }


  deleteTeamAgent(id: any) {
    let modal = this.dialog.open(ConfirmationModalComponent, {
      data: id,
      width: '860px',
      height: '200px'
    });
    modal.afterClosed().subscribe(async (result) => {
      if (result.IsSuccess) {
        this.getTeamStructure();
      }
    });
  }
}
