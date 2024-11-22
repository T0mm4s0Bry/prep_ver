import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchResults: any[] = [];
  searchTerm: string = ''; 
  constructor(private foodService: FoodService) {}

  search() {
    if (this.searchTerm.trim()) {
      this.foodService.searchProducts(this.searchTerm).subscribe((data) => {
        this.searchResults = data.products || [];
      });
    }
  }
}
