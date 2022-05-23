import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  userData: any;
  constructor(private db: AngularFirestore) {}

  getAllProducts() {
    return new Promise<any>((resolve)=> {
        this.db.collection('products').valueChanges({ idField: 'id' }).subscribe(productos => resolve(productos));
    });
  }

}
