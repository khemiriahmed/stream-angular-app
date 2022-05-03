import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {navbarData} from './nav-data'

interface Link{
  id:number;
  name:string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit 
{

navData=navbarData;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
