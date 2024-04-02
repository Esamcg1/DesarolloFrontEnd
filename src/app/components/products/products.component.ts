import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(){}
  products = [
    {
      id: '1',
      image: 'assets/images/img1.png',
      title: 'Camisa 1',
      price: 100,
      description: 'Playera de algodon color negro'
    },
    {
      id: '2',
      image: 'assets/images/img2.png',
      title: 'Camisa 2',
      price: 100,
      description: 'Camisa de vestir anaranjada'
    },
    {
      id: '3',
      image: 'assets/images/img3.png',
      title: 'Camisa 3',
      price: 100,
      description: 'Playera de color negro y blanco'
    },
    {
      id: '4',
      image: 'assets/images/img4.png',
      title: 'Camisa 4',
      price: 100,
      description: 'Playera casual azul'
    },
    {
      id: '5',
      image: 'assets/images/img5.png',
      title: 'Camisa 5',
      price: 100,
      description: 'Playera casual corinta'
    },
    {
      id: '6',
      image: 'assets/images/img6.png',
      title: 'Camisa 6',
      price: 100,
      description: 'Camisa de vestir blanca'
    }
  ];

  ngOnInit(): void{
    
  }

  //Error, se debe de asignar any en clickProduct(id: any) 
  clickProduct(id: any){
    console.log('ID recibido', id);
  }
  //Fin error
}
