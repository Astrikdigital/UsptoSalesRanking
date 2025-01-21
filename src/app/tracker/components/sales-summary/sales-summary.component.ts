import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../shared/services/http.service';
import { AchievementModalComponent } from '../../modals/achievement-modal/achievement-modal.component';
import { RankingService } from '../../../shared/services/rankingService';
import { HttpApiService } from '../../../shared/services/http-api-service';

@Component({
  selector: 'app-sales-summary',
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './sales-summary.component.html',
  styleUrl: './sales-summary.component.css'
})
export class SalesSummaryComponent {

  rankings: any = [];
  teamsData: any = [];
  agentOfDay:any;
  currentDate: any = new Date();


  constructor(
    private rankingService: RankingService,
    private myService: HttpService,
    private httpService: HttpApiService,
    private dialog: MatDialog,
    private config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.getAgentoftheDay();
this.getTopTeams();
this.getPerformers();
    // this.myService.getTeams()
    //   .subscribe(response => {
    //     this.teamsData = response;

    //   });
    this.rankingService.startConnection();
    this.rankingService.onRankingUpdate((data) => { 
      this.rankings = data.list;
      this.getTopTeams();
      this.OpenModal(data,0);
    });

    this.rankingService.onRefundSale((data) => { 
      this.rankings = data.list;
      this.getTopTeams();
      this.OpenModal(data,1);
    });

    this.rankingService.onTeamRankingUpdate((data) => {
      this.teamsData = data;
    });
  }



  async getTopTeams() {
    let res: any = await this.httpService.getTeams();
    this.teamsData = res
  }


  async getPerformers() {
    let res: any = await this.httpService.getPerformers();
    this.rankings = res
    // this.rankings.sort((a:any, b:any) => a.Rank - b.Rank)
  }

  async getAgentoftheDay() {
    let res: any = await this.httpService.getAgentoftheDay();
    this.agentOfDay = res[0]
    console.log(this.agentOfDay,'agent of the day');
    
    // this.rankings.sort((a:any, b:any) => a.Rank - b.Rank)
  }

  OpenModal(data:any,isRefund:number) {
    debugger
    data.isRefund = isRefund
    this.dialog.open(AchievementModalComponent, {
      data: data,
      panelClass:'insert-refund',
      height: '600px',
      width: '1000px',
    })
    // setTimeout(() => {
    //   this.dialog.closeAll();
    // }, 5000);
  }
}
