import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogContent, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { AddSaleModalComponent } from '../add-sale-modal/add-sale-modal.component';

@Component({
  selector: 'app-add-update-agent-modal',
  imports: [CommonModule, NgFor, MatDialogModule, MatFormFieldModule, FormsModule,
    MatDialogContent],
  templateUrl: './add-update-agent-modal.component.html',
  styleUrl: './add-update-agent-modal.component.css'
})
export class AddUpdateAgentModalComponent {
  public teams: any = [];
  public model: any = {
    Name: '',
    TeamId: '',
    RoleId: '',
    IsCordinator: 0
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddUpdateAgentModalComponent>, private httpService: HttpApiService,) {
    if (data != null) {
      if (this.data.id)  this.model.Id = this.data.id; 
      this.model.Name = data.fullName
      this.model.TeamId = data.teamId
      this.model.RoleId = data.roleId
      this.model.IsCordinator = data.isCordinator ? data.isCordinator : 0
    }
  }

  ngOnInit(): void {
    this.getTeams();
  }

  close() {
    this.dialogRef.close();
  }

  async getTeams() {
    let res: any = await this.httpService.getTeam();
    this.teams = res
    console.log(this.teams);
  }

  async saveChanges() {
    
    let res: any = await this.httpService.addUpdateAgent(this.model);
    if (res) {
      this.dialogRef.close({ IsSuccess: true });
    }
    return;
  }
}
