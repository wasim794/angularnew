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
  constructor(private productService: ProductService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Product List");  
    this.productList = this.productService.get();  
  }
  saveBacnet(){
    this.forms.fname = this.forms.fname
    this.forms.lname = this.forms.lname
    console.log(this.forms);
    this.productService.saveBacnet(this.forms)
    .subscribe(data => {
    console.log(data);
    
    })  
  }

}
