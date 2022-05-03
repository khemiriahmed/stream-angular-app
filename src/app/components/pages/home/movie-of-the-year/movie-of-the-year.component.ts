import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-movie-of-the-year',
  templateUrl: './movie-of-the-year.component.html',
  styleUrls: ['./movie-of-the-year.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieOfTheYearComponent implements OnInit {
  movieOfYear!: any [];
  titre='BAILEY';
  duration="2hr:30mins";
  note="4.2(Imdb)";
  badge="15+";
  img_src="https://i.postimg.cc/D047jXkw/final-fantasy-pit66fybw2bhdt0d28s1y3azlhdf2vyr9lkxs9wxoo.jpg"
  paragraph="Baileys Irish Cream is an Irish cream liqueur an alcoholic beverage flavoured with cream, cocoa, and Irish whiskey made by Diageo at Republic of Ireland and in Mallusk, Northern Ireland.";
constructor() { }


    ngOnInit(): void {

    }
}  
