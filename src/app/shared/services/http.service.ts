import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environtment';
import { catchError, firstValueFrom, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private baseUrl = environment.apiUrl;
  // constructor(
  //   private http: HttpClient  
  // ) {

  // }

  

  private baseUrl = environment.apiUrl;
  user:any = {};
  constructor(private http: HttpClient) { 
    
  }

  // private setFormDataHeaders(): HttpHeaders {
  //   var token = this.storage.getItem("Token");
  //   return new HttpHeaders({  
  //     'Authorization': `Bearer ${token}`
  //   });
  // }

  // private setHeaders(): HttpHeaders {
  //   var token = this.storage.getItem("Token");
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   });
  // }

  private handleError(error: any) {  
    if(error.status == 401){
      localStorage.clear(); 
      location.href = "/#/login";
      location.reload();
    }
    return throwError(() => error);
  }

  // get<T>(endpoint: string, queryParams?: any): Observable<T> { 
  //   return this.http.get<T>(`${this.baseUrl}/${endpoint}`); 
  // } 

  async getAsync<T>(endpoint: string, queryParams?: any): Promise<T> {
   const options = {  params: queryParams}; 
   const observable = this.http.get<T>(`${this.baseUrl}${endpoint}`, options);
   return await firstValueFrom(observable.pipe(catchError(this.handleError)));
 }



  async post<T>(endpoint: string, data: any): Promise<T> { 
    const observable = this.http.post<T>(`${this.baseUrl}${endpoint}`, data);
    return await firstValueFrom(observable.pipe(catchError(this.handleError)));
  }
  // async postFormData<T>(endpoint: string, data: FormData): Promise<T> {
  //   let customHeaders = this.setFormDataHeaders();
  //    const options = {  headers:customHeaders,  };  
  //       const observable = this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, options);
  //   return await firstValueFrom(observable.pipe(catchError(this.handleError)));
  //  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    const observable = this.http.put<T>(`${this.baseUrl}/${endpoint}`, data);
    return await firstValueFrom(observable.pipe(catchError(this.handleError)));
  }

  // async delete<T>(endpoint: string,queryParams:any): Promise<T> {
  //   let customHeaders = this.setHeaders();
  //   const options = {  headers:customHeaders  }; 

  //   const observable = this.http.delete<T>(`${this.baseUrl}/${endpoint}`, options);
  //   return await firstValueFrom(observable.pipe(catchError(this.handleError)));
  // }
  
}
