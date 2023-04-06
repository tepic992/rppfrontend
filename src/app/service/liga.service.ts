import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LigaModel } from '../model/liga.model';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private readonly API_URL = 'http://localhost:8082/liga/';
  //private readonly API_URL_P = 'http://localhost:8082/liga/';

  dataChange: BehaviorSubject<LigaModel[]> = new BehaviorSubject<LigaModel[]>([]);

  constructor(private httpClient: HttpClient)
  {

  }

  public getAllLiga(): Observable<LigaModel[]> {
    this.httpClient.get<LigaModel[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addLiga(liga: LigaModel): void {
    this.httpClient.post(this.API_URL, liga).subscribe();
  }

  public updateLiga(liga: LigaModel): void {
    this.httpClient.put(this.API_URL + liga.id, liga).subscribe();
  }

  public deleteLiga(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }

}
