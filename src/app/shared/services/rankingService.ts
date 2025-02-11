import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  hubConnection!: signalR.HubConnection;
  apiUrl = environment.apiUrl;
  reconnectAttempts = 0;
  maxReconnectAttempts = 20; // Prevents excessive retries in normal cases

  constructor() {
    this.buildConnection();
    this.monitorInternetStatus();
  }

  private buildConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.apiUrl.replace("api/", "")}rankingHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect([0, 2000, 10000, 30000, 60000]) // Retry after 2s, 10s, 30s, 60s
      .build();

    this.setupConnectionListeners();
  }

  startConnection() {
    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR Connected');
        this.reconnectAttempts = 0; // Reset on successful connection
      })
      .catch((err) => {
        console.error('Error starting SignalR connection:', err);
        this.retryConnection();
      });

    this.ReceiveNotification();
  }

  private setupConnectionListeners() {
    this.hubConnection.onclose((error) => {
      console.warn('SignalR connection closed', error);
      this.retryConnection();
    });

    this.hubConnection.onreconnecting((error) => {
      console.warn('SignalR reconnecting...', error);
    });

    this.hubConnection.onreconnected((connectionId) => {
      console.log('SignalR reconnected:', connectionId);
      this.reconnectAttempts = 0; // Reset attempts after successful reconnection
    });
  }

  private retryConnection() {
    if (!navigator.onLine) {
      console.warn('No internet connection. Waiting for reconnection...');
      return; // Stop retrying if offline
    }

    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        console.log(`Reconnecting attempt #${this.reconnectAttempts + 1}`);
        this.reconnectAttempts++;
        this.startConnection();
      }, 5000 * this.reconnectAttempts); // Exponential backoff
    } else {
      console.error('Max reconnect attempts reached. Waiting for internet connection...');
      this.waitForInternetAndReconnect();
    }
  }

  private waitForInternetAndReconnect() {
    window.addEventListener('online', () => {
      console.log('Internet reconnected. Restarting SignalR connection...');
      this.reconnectAttempts = 0; // Reset attempts
      this.startConnection();
    });
  }

  private monitorInternetStatus() {
    window.addEventListener('offline', () => {
      console.warn('Internet disconnected. SignalR will reconnect once online.');
    });
  }

  ReceiveNotification() {
    this.hubConnection.on('ReceiveRankingUpdate', (data: any) => {
      console.log(data);
    });
  }

  onAddSaleAgent(callback: (data: any) => void) {
    console.log('Player Rank Update');
    this.hubConnection.on('InsertAgentSales', callback);
  }

  onTeamStructure(callback: (data: any) => void) {
    console.log('Update Team Structure');
    this.hubConnection.on('AddTeamStructure', callback);
  }

  onRefundSale(callback: (data: any) => void) {
    console.log('Refund Sale Update');
    this.hubConnection.on('RefundAgentSales', callback);
  }

  onTeamRankingUpdate(callback: (data: any) => void) {
    console.log('Team Rank Update');
    this.hubConnection.on('TopTeamsRankUpdate', callback);
  }

  onPageRefresh(callback: (data: any) => void) {
    console.log('On Page Refresh');
    this.hubConnection.on('OnPageReload', callback);
  }
}
