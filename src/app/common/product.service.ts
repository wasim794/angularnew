import { Injectable } from '@angular/core';  
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { Product } from './Product' ;

  
  
@Injectable({  
  providedIn: 'root'  
})  
export class ProductService { 
  private bacnet = "http://localhost/api/api.php";
  private getbacnet = "http://localhost/api/getsavedata.php";
  private getbacnetId = "http://localhost/api/getsavedataId.php";
  private saveSubject = new Subject<any>();
  productList: Array<Product> = ([  
    { productId: 1, productName: 'Mobile', productPrice: 12000, productDesc: 'New Mobile' },  
    { productId: 2, productName: 'Computer', productPrice: 30000, productDesc: 'New Computer' },  
    { productId: 3, productName: 'Cabinet', productPrice: 800, productDesc: 'New Cabinet' },  
    { productId: 4, productName: 'HDD', productPrice: 1000, productDesc: 'New HDD' }  
  
  ])  
  constructor( private http: HttpClient) { }  
  get() {  
    return this.productList;  
  }  
  saveBacnet(forms: object): Observable<any> {
    console.log("inside service - saveBacnet:-" + JSON.stringify(forms));
    return this.http.post(`${this.bacnet}`, forms);
  }
  getsaveBacnet(): Observable<any> {
    return this.http.get(`${this.getbacnet}`);
  }
  getsaveBacnetId(id: any): Observable<any> {
    console.log(id);
    return this.http.get(`${this.getbacnetId}?id=${id}`, id);
    //console.log(id);
  }
  // setSaveBacnet(data: any) {
  //   this.saveSubject.next(data);
  // }

}  