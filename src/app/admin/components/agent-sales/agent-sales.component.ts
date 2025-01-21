import { Component } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { CommonModule, NgFor } from '@angular/common';
import { AddSaleModalComponent } from '../../modals/add-sale-modal/add-sale-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { RefundSaleModalComponent } from '../../modals/refund-sale-modal/refund-sale-modal.component';

@Component({
  selector: 'app-agent-sales',
  imports: [NgFor, CommonModule],
  templateUrl: './agent-sales.component.html',
  styleUrl: './agent-sales.component.css'
})
export class AgentSalesComponent {

  public data: any = []

  constructor(private httpService: HttpApiService, private dialog: MatDialog,) { }


  ngOnInit(): void {
    this.getsaleAgent();
  }


  async getsaleAgent() {
    let res: any = await this.httpService.getSaleAgent();
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
        this.getsaleAgent();
      }
    })
  }

  refundSale(row:any){
    let modal =  this.dialog.open(RefundSaleModalComponent, {
      data:row,
      width:'860px',
      height:'200px'
    })

    modal.afterClosed().subscribe(async (result) => {
      if (result.IsSuccess) {
        this.getsaleAgent();
      }
    });
  }
}
