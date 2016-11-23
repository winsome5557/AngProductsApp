import {Component, OnInit} from '@angular/core';
import {productService} from './services/productsService'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers:[productService]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
