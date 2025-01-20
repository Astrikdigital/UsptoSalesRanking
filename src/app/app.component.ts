import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RankingService } from './components/ranking/services/rankingService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RankingService]
})
export class AppComponent {
  title = 'position-tracker';

  constructor(private websocketService:RankingService){}


  ngOnInit(): void {
    this.websocketService.startConnection();
   console.log("Hit successfully");
   
  }
}
