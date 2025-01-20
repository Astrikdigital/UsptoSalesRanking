import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {

  }

  getRankings(){
    let url = `https://localhost:7071/api/Player/TopPerformers`;
    return this.http.get(url);
  }
  getTeams(){
    let url = `https://localhost:7071/api/Player/TopTeams`;
    return this.http.get(url);
  }
  getPerformers(){
    let url = `https://localhost:7071/api/Player/TopPerformers`;
    return this.http.get(url);
  }

}
