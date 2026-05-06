import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  features = [
    { icon: 'fas fa-wifi', title: 'Wi-Fi', description: 'Безплатний швидкий інтернет' },
    { icon: 'fas fa-car', title: 'Парковка', description: 'Безплатна парковка для гостей' },
    { icon: 'fas fa-utensils', title: 'Сніданок', description: 'Смачний сніданок кожного ранку' },
    { icon: 'fas fa-city', title: 'Вид на місто', description: 'Панорамний вид на старе місто' }
  ];
}
