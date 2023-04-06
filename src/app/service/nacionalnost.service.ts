import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NacionalnostModel } from '../model/nacionalnost.model';

@Injectable({
  providedIn: 'root'
})
export class NacionalnostService {

  private readonly API_URL = 'http://localhost:8082/nacionalnost/';
  //private readonly API_URL_P = 'http://localhost:8082/nacionalnost/';

  dataChange: BehaviorSubject<NacionalnostModel[]> = new BehaviorSubject<NacionalnostModel[]>([]);
  
  constructor(private httpClient: HttpClient) 
  { 

  }

  public getAllNacionalnost(): Observable<NacionalnostModel[]> {
    this.httpClient.get<NacionalnostModel[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addNacionalnost(nacionalnost: NacionalnostModel): void {
    this.httpClient.post(this.API_URL, nacionalnost).subscribe();
    
  }

  public updateNacionalnost(nacionalnost: NacionalnostModel): void {
    this.httpClient.put(this.API_URL + nacionalnost.id, nacionalnost).subscribe();
  }

  public deleteNacionalnost(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
