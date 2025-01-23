import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogContent, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-sale-modal',
  imports: [CommonModule,NgFor, MatDialogModule, MatFormFieldModule,FormsModule,
    MatDialogContent],
  templateUrl: './add-sale-modal.component.html',
  styleUrl: './add-sale-modal.component.css'
})
export class AddSaleModalComponent {
  agents:any = [];
  saleModel: any = { 
  agentId: '',
  amount: 0.00,
  date: new Date(),
  month: '',
  };
  months: Date[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddSaleModalComponent>,private httpService: HttpApiService,) { }


  ngOnInit(): void { 
    this.getAgents();
    this.generateMonths(new Date(), 12);
  }
  close() {
    this.dialogRef.close();
  }
  
  async getAgents(){
    let res: any = await this.httpService.getAgents();
    this.agents = res
    console.log(this.agents);
  }

  
 
  generateMonths(startDate: Date, numberOfMonths: number): void {
    const monthsArray: Date[] = [];
    for (let i = 0; i < numberOfMonths; i++) {
      const newDate = new Date(startDate);
      newDate.setMonth(startDate.getMonth() + i);
      monthsArray.push(newDate);
    } 
    this.months = monthsArray;
  } 

  async addSaleAgent(){ 
    console.log(this.saleModel);
    let res: any = await this.httpService.addSale(this.saleModel);
    if (res) {
      this.dialogRef.close({IsSuccess:true});
    }
    return;
  }
}
