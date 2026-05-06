import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROOMS, BOOKING_URL } from '../data';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class RoomsComponent {
  rooms = ROOMS;
  bookingUrl = BOOKING_URL;

  bookNow() {
    window.open(this.bookingUrl, '_blank', 'noopener,noreferrer');
  }
}
