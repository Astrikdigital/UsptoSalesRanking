import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RankingService } from '../../../shared/services/rankingService';
import { HttpApiService } from '../../../shared/services/http-api-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private rankingService: RankingService, private httpApiService: HttpApiService) {}

  ngOnInit() {
  }

  refreshData() {
    this.httpApiService.refereshScreen().then((data: any) => {
      console.log(data);
    });
  } 
}
