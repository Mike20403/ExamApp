import { Component } from '@angular/core';
import { ProductService } from './product.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  constructor(private product:ProductService){
    this.product.getData().subscribe(data =>{
      console.warn(data);
    })
  }
}
