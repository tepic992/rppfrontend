import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimModel } from '../model/tim.model';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  private readonly API_URL = 'http://localhost:8082/tim/';
  //private readonly API_URL_P = 'http://localhost:8082/tim/';

  dataChange: BehaviorSubject<TimModel[]> = new BehaviorSubject<TimModel[]>([]);

  success = false;

  constructor(private httpClient: HttpClient)
   { 

   }

   public getAllTim(): Observable<TimModel[]> {
    this.httpClient.get<TimModel[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addTim(tim : TimModel): void {
    this.httpClient.post(this.API_URL, tim).subscribe();
  }

  public updateTim(tim: TimModel): void {
    this.httpClient.put(this.API_URL + tim.id, tim).subscribe();
  }

  public deleteTim(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
