import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpApiService } from '../../../shared/services/http-api-service';
import { AddSaleModalComponent } from '../add-sale-modal/add-sale-modal.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-edit-team-structure-modal',
  imports: [CommonModule,NgFor, MatDialogModule, MatFormFieldModule,FormsModule,
    MatDialogContent],
  templateUrl: './edit-team-structure-modal.component.html',
  styleUrl: './edit-team-structure-modal.component.css'
})
export class EditTeamStructureModalComponent {  
      agents:any = [];
      closing:any = [];
      teams:any = [];

      teamAgentModel: any = { 
      id: 0,
      agentId: '',
      bench: 0.00,
      achive: 0.00,
      month: 0,
      teamId:'',
      closingId:''
      };
      months: any = [];
      constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddSaleModalComponent>,private httpService: HttpApiService,) { 
        console.log(data,'editRow');
        this.teamAgentModel.id = data.Id
        this.teamAgentModel.agentId = data.AgentId
        this.teamAgentModel.bench = data.Bench
        this.teamAgentModel.achive = data.Achive
        this.teamAgentModel.month = data.MonthId
        this.teamAgentModel.teamId = data.TeamId
        this.teamAgentModel.closingId = data.ClosingId

        console.log(this.teamAgentModel,'AfterSet Model');

      }
    
    
      ngOnInit(): void { 
        this.getAgents();
        this.getClosing();
        this.getTeams();
        this.getMonths();
      }
      close() {
        this.dialogRef.close();
      }
    
    
     async getAgents(){
        let res: any = await this.httpService.getAgents();
        this.agents = res
        console.log(this.agents);
      }
  
      async getClosing(){
        let res: any = await this.httpService.getClosing();
        this.closing = res
        console.log(this.closing);
      }
  
      async getTeams(){
        let res: any = await this.httpService.getTeam();
        this.teams = res
        console.log(this.teams);
      }
      async getMonths(){
        let res: any = await this.httpService.getMonths();
        this.months = res
        console.log(this.months);
      }

      // generateMonths(startDate: Date, numberOfMonths: number): void {
      //   const monthsArray: Date[] = [];
      //   for (let i = 0; i < numberOfMonths; i++) {
      //     const newDate = new Date(startDate);
      //     newDate.setMonth(startDate.getMonth() + i);  
      //     monthsArray.push(newDate);
      //   } 
      //   this.months = monthsArray;
      // } 
    
      async addTeamAgent(){ 
        console.log(this.teamAgentModel);
        let res: any = await this.httpService.updateteamStructure(this.teamAgentModel);
        debugger
        if (res) {
          this.dialogRef.close({IsSuccess:true});
        }
        return;
      }
  

}
