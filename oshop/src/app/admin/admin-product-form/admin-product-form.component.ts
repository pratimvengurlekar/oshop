import { CategoriesService } from './../../categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  categories$;
  constructor(categorieservice: CategoriesService) { 
    this.categories$ = categorieservice.get();
  }

  ngOnInit() {
  }

  Save(product){
    console.log(product);
  }

}
