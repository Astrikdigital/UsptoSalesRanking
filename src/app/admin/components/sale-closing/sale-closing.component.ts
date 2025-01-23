import { Component } from '@angular/core';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { RefundSaleModalComponent } from '../../modals/refund-sale-modal/refund-sale-modal.component';
import { AddSaleModalComponent } from '../../modals/add-sale-modal/add-sale-modal.component';
import { CommonModule, NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sale-closing',
  imports: [CommonModule],
  templateUrl: './sale-closing.component.html',
  styleUrl: './sale-closing.component.css'
})
export class SaleClosingComponent {
     
    public data: any = []
  
    constructor(private httpService: HttpApiService, private dialog: MatDialog,) { }
  
  
    ngOnInit(): void {
      this.saleclosing();
    }
  
  
    async saleclosing() {
      let res: any = await this.httpService.getSaleclosing();
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
          this.saleclosing();
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
          this.saleclosing();
        }
      });
    }
}
