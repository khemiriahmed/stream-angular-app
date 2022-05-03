import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../../../services/api.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LatestMoviesComponent implements OnInit {

  //images;
  responsiveOptions;
  movie!: any [];
  
 

    constructor(private apiservices: ApiService) {
      apiservices.getMovie().subscribe(
        (res) => {
          //console.log(res);
          this.movie = res;
        },
        (err) => {
          //console.log(err);
        }
      );
    


    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
},
{
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
}
];


    


  }

  
  ngOnInit(): void {
  }

}
