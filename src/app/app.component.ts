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


  ngOnInit(): void {
    this.websocketService.startConnection();
   console.log("Hit successfully");
   
  }
}
