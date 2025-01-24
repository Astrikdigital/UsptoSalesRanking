import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RankingService } from './shared/services/rankingService';
import { NgHttpLoaderComponent } from 'ng-http-loader';
import { Spinkit } from 'ng-http-loader'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgHttpLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RankingService]
})
export class AppComponent {
  title = 'position-tracker';
  public spinkit = Spinkit;
  constructor(private websocketService:RankingService){}
  images: string[] = [
    'assets/images/bgImages/bg-1.jpg',
    'assets/images/bgImages/bg-2.jpg',
    'assets/images/bgImages/bg-3.jpg',
    'assets/images/bgImages/bg-4.jpg'
  ];

  currentImage: string = '';
  private intervalId: any;

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnInit(): void {
    this.websocketService.startConnection();
   console.log("Hit successfully");


   let index = 0;
   this.currentImage = this.images[index];
   this.intervalId = setInterval(() => {
     index = (index + 1) % this.images.length;
     this.currentImage = this.images[index];
   }, 60000);
  }
  
}


