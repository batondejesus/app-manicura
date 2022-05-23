import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  products = [];
  productsCopy = [];


  constructor(private productsService: ProductsService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  // CALL PRODUCTS ARRAY
  async getProducts() {
    this.products = await this.productsService.getAllProducts();
    this.productsCopy = this.products;
  }

  search(event) {
    this.products = this.productsCopy;
    if(event.length > 0){
      this.products = this.products.filter(product => product.name.toLowerCase().includes(event.toLowerCase()));
    }
  }

}
