import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOOKING_URL } from '../data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  bookingUrl = BOOKING_URL;

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  scrollToSection(sectionId: string) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  bookNow() {
    window.open(this.bookingUrl, '_blank', 'noopener,noreferrer');
  }
}
