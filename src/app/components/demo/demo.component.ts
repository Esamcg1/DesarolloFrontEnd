import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  constructor() {}
  
  title = 'y';
  items = ['Perez', 'lopez', 'Estrada', 'Gonzales', 'Sanches'];
  
  ngOnInit():void{

  }
  agregarElemento(){
    this.items.push('Nuevo elemento');
  }
  eliminarElemento(){
    this.items.splice(1);
  }
}
