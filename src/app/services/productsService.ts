import {IProduct} from './../products/productInterfaces';
import {Injectable} from '@angular/core';
 
@Injectable()
export class productService {

// This function will return the list of products
getAllProducts(): IProduct[] { 
    
    console.log("in product service");
    return [{
             name:'product1',
             description:'test product',
             cost:10
              },
        { 
             name:'product2',
             description:'test product 2',
             cost:15
        }];
}
}