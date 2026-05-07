import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryCategory {
  title: string;
  images: { url: string; alt: string }[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  categories: GalleryCategory[] = [
    {
      title: 'Бюджетний двомісний номер',
      images: [
        { url: '/assets/images/gallery/budget/1.jpg', alt: 'Бюджетний номер фото 1' },
        { url: '/assets/images/gallery/budget/2.jpg', alt: 'Бюджетний номер фото 2' },
        { url: '/assets/images/gallery/budget/3.jpg', alt: 'Бюджетний номер фото 3' },
      ]
    },
    {
      title: 'Двомісний номер Делюкс',
      images: [
        { url: '/assets/images/gallery/deluxe/1.jpg', alt: 'Делюкс номер фото 1' },
        { url: '/assets/images/gallery/deluxe/2.jpg', alt: 'Делюкс номер фото 2' },
        { url: '/assets/images/gallery/deluxe/3.jpg', alt: 'Делюкс номер фото 3' },
      ]
    },
    {
      title: 'Дворівневий люкс (на 4 людей)',
      images: [
        { url: '/assets/images/gallery/duplex/1.jpg', alt: 'Дворівневий люкс фото 1' },
        { url: '/assets/images/gallery/duplex/2.jpg', alt: 'Дворівневий люкс фото 2' },
        { url: '/assets/images/gallery/duplex/3.jpg', alt: 'Дворівневий люкс фото 3' },
      ]
    }
  ];

  selectedImage: any = null;

  openImage(image: any) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
