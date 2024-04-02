import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(){}

  images: string[] = [
    '../../../assets/images/home1.png',
    '../../../assets/images/home2.png',
    '../../../assets/images/home1.png',
    '../../../assets/images/home2.png'
  ]
  
  
  ngOnInit():void{

  }
}
