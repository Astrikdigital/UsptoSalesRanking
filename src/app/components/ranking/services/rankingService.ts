import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RankingService {
  hubConnection: signalR.HubConnection;

  constructor() {


    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7071/rankingHub')
      .build();
  }
  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`https://localhost:7071/rankingHub`, {
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

  onRankingUpdate(callback: (data: any) => void) {
    console.log("Player Rank Update");
    this.hubConnection.on('ReceiveRankingUpdate', callback);
  }

  onTeamRankingUpdate(callback: (data: any) => void) {
    console.log("Team Rank Update ");

    this.hubConnection.on('TopTeamsRankUpdate', callback);
  }
}
