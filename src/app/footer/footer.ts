import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  menuItems = [
    { text: 'Головна', id: 'hero' },
    { text: 'Про готель', id: 'about' },
    { text: 'Номери', id: 'rooms' },
    { text: 'Галерея', id: 'gallery' },
    { text: 'Відгуки', id: 'reviews' },
    { text: 'Контакти', id: 'contacts' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
