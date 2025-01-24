import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { AddSaleModalComponent } from '../../modals/add-sale-modal/add-sale-modal.component';
import { RefundSaleModalComponent } from '../../modals/refund-sale-modal/refund-sale-modal.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ConfirmationModalComponent } from '../../modals/confirmation-modal/confirmation-modal.component';
import { AddTeamModalComponent } from '../../modals/add-team-modal/add-team-modal.component';

@Component({
  selector: 'app-team',
  imports: [FormsModule,NgFor],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
     public data: any = []
     
       constructor(private httpService: HttpApiService, private dialog: MatDialog,) { }
     
     
       ngOnInit(): void {
         this.getTeam();
       }
     
     
       async getTeam() {
         let res: any = await this.httpService.getTeam();
         this.data = res 
       }
         
    
      
       deleteTeamAgent(id: any) {
           let modal = this.dialog.open(ConfirmationModalComponent, {
             data: id,
             width: '860px',
             height: '200px'
           });
           modal.afterClosed().subscribe(async (result) => {
             if (result) this.removeRow(result);
           });
         }
         async removeRow(Id:any) {
          let refundModel = {
            id: Id,
          }  
          let res: any = await this.httpService.deleteTeam(refundModel);
          if (res)  this.getTeam();
          return;
        }
          editTeam(rowData?: any) {
            let modal = this.dialog.open(AddTeamModalComponent, {
              data: rowData,
              panelClass: 'agentsale',
              width: '860px',
              height: '250px'
            })
            modal.afterClosed().subscribe(async (result) => {
              if (result?.IsSuccess) {
                this.getTeam();
              }
            })
          }
}
