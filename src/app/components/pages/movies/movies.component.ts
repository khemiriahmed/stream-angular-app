import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit {
  pMovie!: any [];
  public selectedID = 0;
  rating :number=3;
  
  constructor(private apiservices: ApiService) {
    apiservices.getpageMovies().subscribe(
      (res) => {
        //console.log(res);
        this.pMovie = res;
      },
      (err) => {
        //console.log(err);
      }
    );
    

 
   }
  images = [
    {path: 'https://i.postimg.cc/hvfd5XrW/banner-1.jpg'},
    {path: 'https://i.postimg.cc/sgpZqdpX/eye.jpg'},
    {path: 'https://i.postimg.cc/7PFMfynH/zombie-island-banner-1.jpg'},
    {path: 'https://i.postimg.cc/RhDcS7FZ/Banner-3.jpg'},
    {path: 'https://i.postimg.cc/k4CRqjvc/banner.jpg'},
    {path: 'https://i.postimg.cc/cH5KwsND/movies01.jpg'},
    {path: 'https://i.postimg.cc/hvfd5XrW/banner-1.jpg'},
    {path: 'https://i.postimg.cc/T1FDMT7y/fat.jpg'},
    {path: 'https://i.postimg.cc/RhDcS7FZ/Banner-3.jpg'},
];   

  ngOnInit(): void {
  }

}
