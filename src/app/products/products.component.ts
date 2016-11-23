import { Console } from '@angular/compiler/src/private_import_core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { runInThisContext } from 'vm';
import { Component, OnInit } from '@angular/core';
import {IProduct} from './productInterfaces';
import {productService } from './../services/productsService';


@Component({
    selector: 'tfl-products',
    templateUrl: './app/products/products.component.html',
}
)
export class productscomponent implements  OnInit
{

    products: IProduct[];

    // Get the products service injected
    constructor(private _prodService: productService)
    {
    }
/*
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
*/

    ngOnInit(): void
    {
        console.log('initializing products');
        this.products  =   this._prodService.getAllProducts();
    }

}

