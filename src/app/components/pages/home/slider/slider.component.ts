import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../../../services/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderComponent implements OnInit {
 rating :number=3;
  public selectedID = 0;

  Carousel!: any [];


  constructor(private apiservices: ApiService) {
    apiservices.getCarousel().subscribe(
      (res) => {
        //console.log(res);
        this.Carousel = res;
      },
      (err) => {
        //console.log(err);
      }
    );
  }


  ngOnInit(): void {

}
}
