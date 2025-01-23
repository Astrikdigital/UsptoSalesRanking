import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { AddSaleModalComponent } from '../../modals/add-sale-modal/add-sale-modal.component';
import { RefundSaleModalComponent } from '../../modals/refund-sale-modal/refund-sale-modal.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

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
             this.getTeam();
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
             this.getTeam();
           }
         });
       }
}
