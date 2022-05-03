import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

 // images;
  responsiveOptions;
  episode!: any [];
  
  constructor(private apiservices: ApiService) { 
    apiservices.getEpisode().subscribe(
      (res) => {
        //console.log(res);
        this.episode = res;
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
