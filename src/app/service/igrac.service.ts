import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IgracModel } from '../model/igrac.model';

@Injectable({
  providedIn: 'root'
})
export class IgracService {

  private readonly API_URL = 'http://localhost:8082/igrac/';
  //private readonly API_URL_P = 'http://localhost:8082/igrac/';

  dataChange: BehaviorSubject<IgracModel[]> = new BehaviorSubject<IgracModel[]>([]);

  constructor(private httpClient: HttpClient) 
  { 

  }

  public getAllIgrac(): Observable<IgracModel[]> {
    this.httpClient.get<IgracModel[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }
  
  public addIgrac(igrac: IgracModel): void {
    this.httpClient.post(this.API_URL, igrac).subscribe();
  }

  public updateIgrac(igrac: IgracModel): void {
    this.httpClient.put(this.API_URL + igrac.id, igrac).subscribe();
  }

  public deleteIgrac(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
