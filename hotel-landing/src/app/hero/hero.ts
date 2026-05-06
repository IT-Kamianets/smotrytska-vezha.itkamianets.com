import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  bookingUrl = 'https://www.booking.com/hotel/ua/smotrits-ka-vezha.uk.html?aid=2195102&label=1778063266.145882&sid=fcd1f84e5dbf1af026483a5e213f0567&all_sr_blocks=338980401_116514629_2_0_0&checkin=2026-05-07&checkout=2026-05-08&dest_id=-1040849&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=338980401_116514629_2_0_0&hpos=1&matching_block_id=338980401_116514629_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=338980401_116514629_2_0_0__120000&srepoch=1778063272&srpvid=3f024991a7160234&type=total&ucfs=1&#hotelTmpl';

  scrollToRooms() {
    const element = document.getElementById('rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
