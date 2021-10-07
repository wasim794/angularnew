export class Product {  

    constructor(productId: number, productName: string, productPrice: number, productDesc: string) {
        this.productId = productId;
        this.productName= productName;  
        this.productPrice= productPrice;  
        this.productDesc= productDesc; 
      }
    productId: number;  
    productName: string;  
    productPrice: number;  
    productDesc: string;  
}  
