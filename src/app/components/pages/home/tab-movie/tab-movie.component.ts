import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tab } from './tab';

interface Season {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tab-movie',
  templateUrl: './tab-movie.component.html',
  styleUrls: ['./tab-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabMovieComponent implements OnInit {


  tab:Tab={
      
    brand: "https://i.postimg.cc/GpDS23hR/trending-label.png",
    titre: "Zombie island",
    date:"2 Season Feb 2019",
    paragraph:"he Black Pearl is a fictional ship in the Pirates of the Caribbean film series. In the screenplay, the Black Pearl is easily recognized by her distinctive black hull and sails. Captained by Captain Jack Sparrow, she is said to be nigh uncatchable",
    starring:"Karen Gilchrist James Earl Jones",
    genre:"Horror",
    tags:"Horror,Adventure,Horror",
    url_videos:""

}

season: Season[] = [
  {value: 'Season1', viewValue: 'Season 1'},
];



  constructor() {}
  ngOnInit(): void {


    
   
  }

}
