import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { REVIEWS } from '../data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class ReviewsComponent {
  reviews = REVIEWS;

  getStarArray(rating: number): number[] {
    return Array(Math.max(0, rating)).fill(0);
  }
}
