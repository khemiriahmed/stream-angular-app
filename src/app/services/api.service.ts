import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCarousel(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-app-angular/carousel');
  }

  getMovie(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-app-angular/movie');
  }

  getUpcommingMovie(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-app-angular/upCommingMovie');
  }

  
  getEpisode(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-app-angular/episode');
  }

  getpageMovies(): Observable<any> {
    return this.http.get<any>('https://my-json-server.typicode.com/khemiriahmed/stream-app-angular/page-movies');
  }

  
}
