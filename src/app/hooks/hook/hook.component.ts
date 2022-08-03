import { Component, OnInit } from '@angular/core';
import { IProduct, MProduct } from './product';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit {

  data!: string;
  name?: string;
  price?: number;
  color?: string;
  products: MProduct = new MProduct();
  constructor() { }

  ngOnInit(): void {
    console.log("This is the price", this.price);
  }

  handlerData = (e: any) => {
    this.data = e.target.value;
  }

  updateProduct = () => {
    this.products.name = this.name;
    this.products.price = this.price;

    console.log("products", this.products);
  }

  passColor = (e: any) => {
   this.color = e.target.value;
  }

}
