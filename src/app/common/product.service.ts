import { Injectable } from '@angular/core';  
import { Product } from './Product' ;  
  
  
@Injectable({  
  providedIn: 'root'  
})  
export class ProductService {  
  productList: Array<Product> = ([  
    { productId: 1, productName: 'Mobile', productPrice: 12000, productDesc: 'New Mobile' },  
    { productId: 2, productName: 'Computer', productPrice: 30000, productDesc: 'New Computer' },  
    { productId: 3, productName: 'Cabinet', productPrice: 800, productDesc: 'New Cabinet' },  
    { productId: 4, productName: 'HDD', productPrice: 1000, productDesc: 'New HDD' }  
  
  ])  
  constructor() { }  
  get() {  
    return this.productList;  
  }  
}  