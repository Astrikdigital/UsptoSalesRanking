import { Component, Inject } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr'; 
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule  ,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,} from '@angular/material/dialog';
  import {MatFormFieldModule} from '@angular/material/form-field'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievement-modal',
  imports: [CommonModule,  MatDialogModule,   MatFormFieldModule,
    MatDialogContent],
  templateUrl: './achievement-modal.component.html',
  styleUrl: './achievement-modal.component.css',
  standalone: true,
})
export class AchievementModalComponent  {
  selectedData: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AchievementModalComponent>) {
    this.selectedData = data;
    console.log(this.selectedData,"yahan hun mai ");
    
  }
 
close(){
  this.dialogRef.close();
}


}
