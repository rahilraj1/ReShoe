import { Component } from '@angular/core';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.less']
})
export class LookbookComponent 
{
  dataArray:Array<any>=
  [
    {
      imgUrl:'../../assets/recycled-shoe-store-lookbook-cover-image-4.jpg',
      heading:'Fall/Winter 2021',
    },
    {
      imgUrl:'../../assets/recycled-shoe-store-lookbook-cover-image-3.jpg',
      heading:'Spring/Summer 2021',
    },
    {
      imgUrl:'../../assets/recycled-shoe-store-lookbook-cover-image-2.jpg',
      heading:'Go & Play',
    },
    {
      imgUrl:'../../assets/recycled-shoe-store-lookbook-cover-image-1.jpg',
      heading:'Adventurer Gear',
    },
  ]
}
