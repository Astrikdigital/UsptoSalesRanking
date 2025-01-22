import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { RefundSaleModalComponent } from '../refund-sale-modal/refund-sale-modal.component';

@Component({
  selector: 'app-confirmation-modal',
  imports: [MatDialogModule, MatFormFieldModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css'
})
export class ConfirmationModalComponent {

  public Id :any;
constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<RefundSaleModalComponent>, private httpService: HttpApiService,) {
  this.Id = data
    console.log(this.Id, "Id");
  }



  close() {
    this.dialogRef.close();
  }

  async removeRow() {
    let refundModel = {
      id: this.Id,
    } 
    debugger
    let res: any = await this.httpService.deleteTeamStructure(refundModel);
    if (res) { 
      this.dialogRef.close({IsSuccess:true});
    }
    return;
  }
}
