import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TrendingComponent implements OnInit {

  constructor() { }
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
