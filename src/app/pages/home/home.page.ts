
import { AfterContentChecked, Component, HostListener, Input, OnInit, Renderer2, ViewChild , ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DomController, IonSlides } from '@ionic/angular';
import { ProductsService } from '../../services/products-service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  products = [];

  constructor(private productsService: ProductsService) {
    this.getProducts();
  }
  ngOnInit() { }

  // CALL PRODUCTS ARRAY
  async getProducts() {
    this.products = await this.productsService.getAllProducts();
  }
}
