import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { AddSaleModalComponent } from '../add-sale-modal/add-sale-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-refund-sale-modal',
  imports: [MatDialogModule, MatFormFieldModule],
  templateUrl: './refund-sale-modal.component.html',
  styleUrl: './refund-sale-modal.component.css'
})
export class RefundSaleModalComponent {
  refundAgent: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<RefundSaleModalComponent>, private httpService: HttpApiService,) {
    this.refundAgent = data;
    console.log(this.refundAgent, "refund Row");
  }



  close() {
    this.dialogRef.close();
  }

  async refundSale() {
    let refundModel = {
      id: this.refundAgent.id,
      agentId: this.refundAgent.agentId,
      amount: this.refundAgent.amount,
      date: this.refundAgent.saleDate,
      month: this.refundAgent.month,
      statusId: this.refundAgent.statusId
    } 
    let res: any = await this.httpService.refundSale(refundModel);
    if (res) { 
      this.dialogRef.close({IsSuccess:true});
    }
    return;
  }
}
