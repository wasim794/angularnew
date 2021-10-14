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
  updates:any;   
  constructor(private productService: ProductService, private title: Title) { }

  ngOnInit() {
   this.getBacnet();
   this.upDates(this.updates);
  //  this.upDates(this.updates);
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

  upDates(id: any){
  this.updates=id;
  console.log(id);
   
   this.productService.getsaveBacnetId(this.updates).subscribe(data => {
     this.forms = data[0];
    console.log('response data'+ JSON.stringify(this.forms));
  //  console.log('getBacnet data' + JSON.stringify(data));
  });

  }

  upDatesIdforms(id: any){
    this.updates=id;
    console.log(id, this.forms);
     
     this.productService.getsaveBacnetIdupdate(id, this.forms).subscribe(data => {
      console.log('response data'+ JSON.stringify(this.forms));
    //  console.log('getBacnet data' + JSON.stringify(data));
    });
  
    }

}
