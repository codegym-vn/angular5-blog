import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
