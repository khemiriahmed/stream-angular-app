import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCarousel(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-angular-app/carousel');
  }

  getMovie(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-angular-app/movie');
  }

  getUpcommingMovie(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-angular-app/upCommingMovie');
  }

  
  getEpisode(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-angular-app/episode');
  }

  getpageMovies(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-angular-app/page-movies');
  }

  
}
