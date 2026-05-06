import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { RoomsComponent } from './rooms/rooms';
import { GalleryComponent } from './gallery/gallery';
import { ReviewsComponent } from './reviews/reviews';
import { ContactsComponent } from './contacts/contacts';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    RoomsComponent,
    GalleryComponent,
    ReviewsComponent,
    ContactsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
