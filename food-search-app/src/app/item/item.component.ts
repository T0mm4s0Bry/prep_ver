import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.foodService.getProductById(id).subscribe((data) => {
      this.product = data.product;
    });
  }
}
