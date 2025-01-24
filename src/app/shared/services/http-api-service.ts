import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class HttpApiService {

    constructor(readonly httpService: HttpService) { }

    async getCountries(): Promise<any> {
        return await this.httpService.getAsync<any>('Common/get-all-countries');
    }
    async getTeams(){
        return await this.httpService.getAsync<any>('Agent/GetTopTeam');
    }
    async getPerformers(){
        return await this.httpService.getAsync<any>('Agent/GetSalesSummary');
    }
    async getSaleAgent(){
        return await this.httpService.getAsync<any>('Agent/GetAgentSales');
    }
    async getAgents(){
        return await this.httpService.getAsync<any>('Agent/GetAgent');
    }
    async getClosing(){
        return await this.httpService.getAsync<any>('Agent/GetClosing');
    }
    async getTeam(){
        return await this.httpService.getAsync<any>('Agent/GetTeam');
    }
    async getMonths(){
        return await this.httpService.getAsync<any>('Agent/GetMonths');
    }
    async addSale(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/InsertAgentSales', body)
    }
    async refundSale(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/RefundAgentSales', body)
    }
    async getAgentoftheDay(){
        return await this.httpService.getAsync<any>('Agent/GetAgentOfTheDay');
    }

    async getSaleclosing(){
        return await this.httpService.getAsync<any>('Agent/GetClosing');
    }
    
    async getTeamStructure(){
        return await this.httpService.getAsync<any>('Agent/GetTeamStructure');
    }

    async addTeamStructure(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/CreateTeamStructure', body)
    }
    async updateteamStructure(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/UpdateTeamStructure', body)
    }

    async deleteTeamStructure(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/DeleteTeamStructure', body)
    }
    async addUpdateAgent(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/InsertUpdateAgent', body)
    }
}