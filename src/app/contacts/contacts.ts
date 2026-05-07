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
      value: 'вулиця Рiчна, 75, Кам\'янець-Подільський, Хмельницька область, 32300',
      link: 'https://maps.google.com/?q=вулиця+Річна+75+Кам\'янець-Подільський'
    },
    {
      icon: 'fas fa-phone',
      title: 'Телефон',
      value: '097 966 25 65',
      link: 'tel:+380979662565'
    }
  ];
}
