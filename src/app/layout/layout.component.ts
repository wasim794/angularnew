import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/product.service';  
import { forms } from '../common/forms.Model';  
import { BrowserModule, Title } from '@angular/platform-browser';  

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  productList: any; 
  forms = {} as forms;
  Getforms:any;   
  constructor(private productService: ProductService, private title: Title) { }

  ngOnInit() {
   // this.getBacnet();
    this.title.setTitle("Product List");  
    this.productList = this.productService.get();  
    
  }
  saveBacnet(){
  
    console.log("savingBacnet with data:-" +this.forms);
    this.productService.saveBacnet(this.forms)
    .subscribe(data => {
    console.log(data);
    
    })  
  }
  getBacnet() {
    this.productService.getsaveBacnet().subscribe(data => {
      this.Getforms = data;
      console.log('hello get', data);
    //  console.log('getBacnet data' + JSON.stringify(data));
    });
  }

}
