import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpApiService } from '../../../shared/services/http-api-service';

@Component({
  selector: 'app-add-team-modal',
  imports: [CommonModule,  MatDialogModule, MatFormFieldModule,FormsModule,
    MatDialogContent],
  templateUrl: './add-team-modal.component.html',
  styleUrl: './add-team-modal.component.css'
})
export class AddTeamModalComponent { 
      teamAgentModel: any = {}; 
      constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddTeamModalComponent>,private httpService: HttpApiService) { 
        debugger
        if(this.data){
          this.teamAgentModel.id = this.data.Id;
          this.teamAgentModel.name = this.data.Name;
          this.teamAgentModel.logo = this.data.Logo;
        }
      }
    
    
      ngOnInit(): void {  
      }
      close() {
        this.dialogRef.close();
      } 
    
      async InsertUpdateTeam(){  
        let res: any = await this.httpService.InsertUpdateTeam(this.teamAgentModel);
        debugger
        if (res) {
          this.dialogRef.close({IsSuccess:true});
        }
        return;
      }
  

}
