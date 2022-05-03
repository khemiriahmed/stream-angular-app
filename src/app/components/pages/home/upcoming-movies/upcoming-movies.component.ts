import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../../../services/api.service';
@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UpcomingMoviesComponent implements OnInit {


  upcommingMovie!: any [];
  responsiveOptions;

  
  constructor(private apiservices: ApiService) {
    apiservices.getUpcommingMovie().subscribe(
      (res) => {
       // console.log(res);
        this.upcommingMovie = res;
      },
      (err) => {
       // console.log(err);
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
