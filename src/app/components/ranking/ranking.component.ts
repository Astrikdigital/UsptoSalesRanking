import { Component } from '@angular/core';
import { RankingService } from './services/rankingService';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { AchievementModalComponent } from './modal/achievement-modal/achievement-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ranking',
  imports: [CommonModule,NgbCarouselModule],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css',
  standalone: true
})
export class RankingComponent {
  rankings: any = [];
  teamsData: any = [];
  currentDate: any =  new Date();


  constructor(
     private rankingService: RankingService,
     private myService: HttpService, 
     private dialog: MatDialog,
     private config: NgbCarouselConfig
    ) { 
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.myService.getRankings()
      .subscribe(response => {
        this.rankings = response;
      });
    this.myService.getTeams()
      .subscribe(response => {
        this.teamsData = response;
   
      });
    this.rankingService.startConnection();
    this.rankingService.onRankingUpdate((data) => {
      this.rankings = data;
      this.OpenModal();

    });
    this.rankingService.onTeamRankingUpdate((data) => {
      this.teamsData = data;
    });
  }
  OpenModal() {
    var d:any  = this.rankings.find((x:any)=>x.rank == 1);
    debugger
  this.dialog.open(AchievementModalComponent, {
       data:d ,
       height: '600px',
       width: '1000px',

    })
    setTimeout(() => {
      this.dialog.closeAll();
    }, 5000);
  }
}
