import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../shared/services/http.service';
import { AchievementModalComponent } from '../../modals/achievement-modal/achievement-modal.component';
import { RankingService } from '../../../shared/services/rankingService';
import { HttpApiService } from '../../../shared/services/http-api-service';
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-sales-summary',
  imports: [CommonModule, NgbCarouselModule,NgIf,NgFor],
  templateUrl: './sales-summary.component.html',
  styleUrl: './sales-summary.component.css'
})
export class SalesSummaryComponent {
  
  images: string[] = [
    'bg-0',
    'bg-1',
    'bg-2',
    'bg-3',
    'bg-4'
  ];
  teamsData: any = [];
  agentOfDay: any;
  currentDate: any = new Date();
  upSells:any = [];
  frontSells:any = [];

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
  currentImage: string = '';
  private intervalId: any;
  ngOnDestroy(){
    const element = document.getElementById('bodyid');
    if (element) {
      element.classList.remove('bg-body');
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  ngOnInit() {
    var element:any = document.getElementById('bodyid');
    let index = 0;
    this.currentImage = this.images[index];

    this.intervalId = setInterval(() => {
      debugger
      if(index == 0){
        element.classList.remove('bg-0');
        element.classList.remove('bg-4');
      }
      index = (index + 1) % this.images.length;
      element.classList.remove(this.images[index])
      element.classList.add(this.images[index+1])
      if(index == 3){
        index = 0;
      }
      this.lazyLoadImage(index);
    }, 20000);


   
    if (element) {
      element.classList.add('bg-body');
      element.classList.add('bg-0');
    }
    this.rankingService.startConnection();
    this.getAgentoftheDay();
    this.getTopTeams();
    this.getPerformers();

    this.rankingService.onAddSaleAgent((data) => {
      this.upSells = data.list.upSell;
      this.frontSells = data.list.frontSell;
      setInterval(() => {
        this.celebrate();
      }, 2000);
      this.getTopTeams();
      this.getAgentoftheDay();
      this.OpenModal(data, 0);
    });

    this.rankingService.onPageRefresh((data) => {
      window.location.reload();
    });

    this.rankingService.onTeamStructure((data) => {
      this.getTopTeams();
      this.getAgentoftheDay();
      this.getPerformers();
    });

    this.rankingService.onRefundSale((data) => {
      this.upSells = data.list.upSell;
      this.frontSells = data.list.frontSell;
      this.getTopTeams();
      this.getAgentoftheDay();
      this.OpenModal(data, 1);
    });

    this.rankingService.onTeamRankingUpdate((data) => {
      this.teamsData = data;
    });
  }

  lazyLoadImage(index: number) {
    const img = new Image();
    img.src = this.images[index];

    // Update background only after the image has loaded
    img.onload = () => {
      this.currentImage = this.images[index];
    };
  }



  async getTopTeams() {
    let res: any = await this.httpService.getTeams();
    this.teamsData = res
  }


  async getPerformers() {
    let res: any = await this.httpService.getPerformers();
    this.upSells = res.upSell;
    this.frontSells = res.frontSell;
    // this.rankings.sort((a:any, b:any) => a.Rank - b.Rank)
  }

  async getAgentoftheDay() {
    let res: any = await this.httpService.getAgentoftheDay();
    this.agentOfDay = res[0];
    console.log(this.agentOfDay,'Agent of the day');
    
  }

  OpenModal(data: any, isRefund: number) { 
    data.isRefund = isRefund
    this.dialog.open(AchievementModalComponent, {
      data: data,
      panelClass: 'insert-refund',
      //height: '700px',
      //width: '1000px',
    })
    setTimeout(() => {
      this.dialog.closeAll();
    }, 20000);
  }

  celebrate() {
    const duration = 18000; // in milliseconds
    var scalar = 2;
    var pineapple = confetti.shapeFromText({ text: '🎈', scalar });

    confetti({
      particleCount: 500,
      spread: 500,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      },
      colors: ['#FF4500', '#008080', '#FFD700'],
    });
    // Clear confetti after a certain duration
    setTimeout(() => confetti.reset(), duration);
  }
}
