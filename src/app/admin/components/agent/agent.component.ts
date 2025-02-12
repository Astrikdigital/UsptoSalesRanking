import { Component } from '@angular/core';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { MatDialog } from '@angular/material/dialog';

import { AddSaleModalComponent } from '../../modals/add-sale-modal/add-sale-modal.component';
import { RefundSaleModalComponent } from '../../modals/refund-sale-modal/refund-sale-modal.component';
import { CommonModule, NgFor } from '@angular/common';
import { AddUpdateAgentModalComponent } from '../../modals/add-update-agent-modal/add-update-agent-modal.component';
import { ConfirmationModalComponent } from '../../modals/confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'app-agent',
  imports: [NgFor, CommonModule],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {
  public data: any = []
  constructor(private httpService: HttpApiService, private dialog: MatDialog,) { }

  ngOnInit() {
    this.getAgent();
  }
  async getAgent() {
    let res: any = await this.httpService.getAgents();
    this.data = res
    console.log(this.data);
  }

  addUpdateAgent(rowData?:any) {
    let modal = this.dialog.open(AddUpdateAgentModalComponent, {
      data:rowData,
      panelClass: 'agentsale',
      width: '860px',
      height: '400px'
    })

    modal.afterClosed().subscribe(async (result) => {
      if (result.IsSuccess) {
        this.getAgent();
      }
    })
  }
      deleteAgent(id: any) {
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
          let res: any = await this.httpService.deleteAgent(refundModel);
          if (res)   this.getAgent();
          return;
        }
  // refundSale(row:any){
  //   let modal =  this.dialog.open(RefundSaleModalComponent, {
  //     data:row,
  //     width:'860px',
  //     height:'200px'
  //   })

  //   modal.afterClosed().subscribe(async (result) => {
  //     if (result.IsSuccess) {
  //       this.getAgent();
  //     }
  //   });
  // }
}
