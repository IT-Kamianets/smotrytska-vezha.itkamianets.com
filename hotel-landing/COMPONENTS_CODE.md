# Angular Components - Детальна документація

## 📝 data.ts - Mock дані

```typescript
export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export const ROOMS: Room[] = [
  {
    id: 1,
    name: 'Стандартний номер',
    description: 'Затишний номер з видом на вулицю. Укомплектований всім необхідним для комфортного проживання.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Напівлюкс',
    description: 'Просторий номер з окремою зоною для відпочинку. Панорамний вид на старе місто та каньйон.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Люкс',
    description: 'Розкішний номер з приватним балконом. Вид на найкрасивіші пам\'ятки Кам\'янця-Подільського.',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1578822261290-991b38693d1b?w=500&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Президентський люкс',
    description: 'Найпрестижніший номер готелю з двома спальнями, гідромасажною ванною та панорамним балконом.',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Марія К.',
    rating: 5,
    text: 'Чудовий готель у чарівному місці! Персонал дуже привітний, номер чистий та комфортний. Рекомендую всім!'
  },
  {
    id: 2,
    name: 'Іван П.',
    rating: 5,
    text: 'Неймовірний вид на каньйон! Кожної ночі засинаємо під шум річки. Готель виправдав усі очікування.'
  },
  {
    id: 3,
    name: 'Наталія Г.',
    rating: 4,
    text: 'Хороший готель з гарним обслуговуванням. Єдине - трохи прохолодно вночі, але загалом дуже задоволена.'
  },
  {
    id: 4,
    name: 'Олег В.',
    rating: 5,
    text: 'Найкращий вибір для пару! Романтична атмосфера, смачний сніданок, чудовий вид. Обов\'язково повернемось!'
  }
];
```

## 🧩 Header Component

### header.ts
```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isMenuOpen = signal(false);

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
}
```

### header.html (скорочена версія)
```html
<header class="header-component">
  <nav class="navbar is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item logo" (click)="scrollToSection('hero')">
        <span class="icon-text">
          <span class="icon is-large">
            <i class="fas fa-tower-broadcast" style="color: #4a90e2; font-size: 1.5rem;"></i>
          </span>
          <span class="title is-5" style="margin-left: 0.5rem; color: #4a90e2;">
            Смотрицька Вежа
          </span>
        </span>
      </a>

      <a role="button" class="navbar-burger" [class.is-active]="isMenuOpen()" (click)="toggleMenu()"
        aria-label="Toggle navigation menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" [class.is-active]="isMenuOpen()">
      <div class="navbar-end">
        <a class="navbar-item" (click)="scrollToSection('hero')">Головна</a>
        <a class="navbar-item" (click)="scrollToSection('about')">Про готель</a>
        <a class="navbar-item" (click)="scrollToSection('rooms')">Номери</a>
        <a class="navbar-item" (click)="scrollToSection('gallery')">Галерея</a>
        <a class="navbar-item" (click)="scrollToSection('reviews')">Відгуки</a>
        <a class="navbar-item" (click)="scrollToSection('contacts')">Контакти</a>
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-primary is-rounded">
              <strong>Забронювати</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
```

## 🏠 Rooms Component

### rooms.ts
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROOMS } from '../data';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class RoomsComponent {
  rooms = ROOMS;
}
```

### rooms.html (скорочена версія)
```html
<section id="rooms" class="rooms-component section has-background-light">
  <div class="container">
    <div class="content">
      <h2 class="title is-2 has-text-centered">Наші номери</h2>
      <p class="subtitle has-text-centered">Виберіть номер, який найкраще вам підходить</p>

      <div class="columns is-multiline is-centered mt-6">
        <div class="column is-one-third-desktop is-half-tablet is-full-mobile" *ngFor="let room of rooms">
          <div class="room-card">
            <div class="room-image">
              <figure class="image is-4by3">
                <img [src]="room.image" [alt]="room.name">
              </figure>
              <div class="room-price-badge">
                <span class="tag is-large is-primary">₴ {{ room.price }}/ніч</span>
              </div>
            </div>

            <div class="room-content">
              <h3 class="title is-5">{{ room.name }}</h3>
              <p class="room-description">{{ room.description }}</p>

              <div class="room-footer mt-4">
                <button class="button is-fullwidth is-primary is-rounded">
                  <span class="icon">
                    <i class="fas fa-check"></i>
                  </span>
                  <span>Забронювати</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## ⭐ Reviews Component

### reviews.ts
```typescript
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
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}
```

### reviews.html (скорочена версія)
```html
<section id="reviews" class="reviews-component section has-background-light">
  <div class="container">
    <div class="content">
      <h2 class="title is-2 has-text-centered">Відгуки гостей</h2>

      <div class="columns is-multiline is-centered mt-6">
        <div class="column is-one-third-desktop is-half-tablet is-full-mobile" 
             *ngFor="let review of reviews">
          <div class="review-card">
            <div class="review-header">
              <div class="review-avatar">
                <div class="avatar-circle">{{ review.name.charAt(0) }}</div>
              </div>
              <div class="review-info">
                <h4 class="title is-6">{{ review.name }}</h4>
                <div class="stars">
                  <span class="icon is-small has-text-warning" 
                        *ngFor="let i of getStarArray(review.rating)">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="icon is-small has-text-grey-light" 
                        *ngFor="let i of getStarArray(5 - review.rating)">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>
            </div>

            <div class="review-text mt-3">
              <p>{{ review.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 🖼️ Gallery Component

### gallery.ts
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  images = [
    { url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop', 
      alt: 'Номер готелю' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop', 
      alt: 'Люкс номер' },
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop', 
      alt: 'Батьківщина' },
    { url: 'https://images.unsplash.com/photo-1578822261290-991b38693d1b?w=400&h=400&fit=crop', 
      alt: 'Готель' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop', 
      alt: 'Ресторан' },
    { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop', 
      alt: 'Холл' }
  ];

  selectedImage: any = null;

  openImage(image: any) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
```

## 📍 Contacts Component

### contacts.ts
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class ContactsComponent {
  contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Адреса',
      value: 'вул. Острозького, 1, Кам\'янець-Подільський, Хмельницька обл., 32000',
      link: 'https://maps.google.com/?q=Kamianets-Podilskyi'
    },
    {
      icon: 'fas fa-phone',
      title: 'Телефон',
      value: '+38 (03849) 42-500',
      link: 'tel:+380384942500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'info@smotrytska-vezha.com',
      link: 'mailto:info@smotrytska-vezha.com'
    }
  ];
}
```

## 🦶 Footer Component

### footer.ts
```typescript
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
```
