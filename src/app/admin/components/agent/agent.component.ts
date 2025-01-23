import { Component } from '@angular/core';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { MatDialog } from '@angular/material/dialog';

import { AddSaleModalComponent } from '../../modals/add-sale-modal/add-sale-modal.component';
import { RefundSaleModalComponent } from '../../modals/refund-sale-modal/refund-sale-modal.component';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-agent',
  imports: [NgFor,CommonModule],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {
  public data: any = []
  constructor(private httpService: HttpApiService, private dialog: MatDialog,){}
 
  ngOnInit(){
   this.getAgent();
  }
  async getAgent() {
    let res: any = await this.httpService.getAgents();
    this.data = res
    console.log(this.data);
  }

  addSale() {
      let modal = this.dialog.open(AddSaleModalComponent, {
        panelClass:'agentsale',
        width:'860px',
        height:'300px'
      })
  
      modal.afterClosed().subscribe(async (result) => {
        debugger;
        if (result.IsSuccess) {
          this.getAgent();
        }
      })
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
