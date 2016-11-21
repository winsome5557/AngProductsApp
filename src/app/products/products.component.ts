import { Component } from '@angular/core';

@Component({
    selector: 'tfl-products',
    templateUrl: './app/products/products.component.html'
}
)
export class productscomponent
{

     allproducts: any[] =[
        { 
             name:'product1',
             description:'test product',
             cost:'10£'
        },
        { 
             name:'product2',
             description:'test product 2',
             cost:'15£'
        }
        ];


}
