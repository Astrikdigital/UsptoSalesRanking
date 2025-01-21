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

    // async GetReadingType(): Promise<any> {
    //     return await this.httpService.getAsync<any>('faculty/get-reading-types')

    // }


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

    async addSale(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/InsertAgentSales', body)

    }

    async refundSale(body: any): Promise<any> {
        return await this.httpService.post<any>('Agent/RefundAgentSales', body)

    }

    async getAgentoftheDay(){
        return await this.httpService.getAsync<any>('Agent/GetAgentOfTheDay');
    }
    
    
}