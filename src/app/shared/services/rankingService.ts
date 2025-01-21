import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environtment';


@Injectable({
  providedIn: 'root',
})
export class RankingService {
  hubConnection: signalR.HubConnection;
  apiUrl = environment.apiUrl;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.apiUrl.replace("api/","")}rankingHub`)
      .build();
  }
  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.apiUrl.replace("api/","")}rankingHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }).withAutomaticReconnect([0, 2000, 10000])
      .build();

    this.hubConnection
      .start()
      .then(() => {

      })
      .catch((err: any) => err);
    this.ReceiveNotification();
  }
  ReceiveNotification() {
    this.hubConnection.on("ReceiveRankingUpdate", (data: any) => {
      console.log(data);
    });

  }

  onAddSaleAgent(callback: (data: any) => void) {
    console.log("Player Rank Update");
    this.hubConnection.on('InsertAgentSales', callback);
  }

  onRefundSale(callback: (data: any) => void) {
    console.log("Refund Sale Update");
    this.hubConnection.on('RefundAgentSales', callback);
  }

  onTeamRankingUpdate(callback: (data: any) => void) {
    console.log("Team Rank Update ");

    this.hubConnection.on('TopTeamsRankUpdate', callback);
  }
}
