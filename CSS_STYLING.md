# CSS & Styling - Детальна документація

## 🎨 Global Styles (styles.css)

```css
/* Імпорт Bulma */
@import 'bulma/css/bulma.min.css';

/* CSS змінні */
:root {
  --primary-color: #4a90e2;
  --accent-color: #f39c12;
  --text-dark: #2c3e50;
  --text-light: #ecf0f1;
  --border-radius: 8px;
}

/* Плавний скрол */
* {
  scroll-behavior: smooth;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f8f9fa;
}
```

## 📱 Header Component CSS

```css
.header-component {
  margin-bottom: 3.25rem;
}

.navbar {
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.navbar-brand .logo {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.navbar-brand .logo:hover {
  transform: translateY(-2px);
}

.navbar-item {
  color: white;
  transition: color 0.3s ease;
  cursor: pointer;
  font-weight: 500;
}

.navbar-item:hover {
  color: #f39c12;
  background-color: transparent;
}

.navbar-burger {
  color: white;
}

.button.is-primary {
  background-color: #f39c12;
  border-color: #f39c12;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.button.is-primary:hover {
  background-color: #e67e22;
  border-color: #e67e22;
  transform: scale(1.05);
}

/* Мобільна адаптація */
@media (max-width: 1023px) {
  .navbar-menu {
    background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .navbar-item {
    padding-left: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
```

## 🖼️ Hero Section CSS

```css
.hero-component {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  animation: zoomIn 10s ease-in-out infinite;
}

@keyframes zoomIn {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  padding: 2rem;
}

.hero-text {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text .title {
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-20px);
  }
}

@media (max-width: 768px) {
  .hero-component {
    height: 80vh;
  }

  .hero-text .title {
    font-size: 2rem;
  }

  .buttons {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}
```

## 🏠 Rooms Component CSS

```css
.rooms-component {
  padding: 4rem 0;
}

.rooms-component .title {
  color: #4a90e2;
  font-weight: 700;
}

.room-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.room-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.2);
}

.room-image {
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
}

.room-image img {
  transition: transform 0.3s ease;
}

.room-card:hover .room-image img {
  transform: scale(1.1);
}

.room-price-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
}

.room-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.room-content .title {
  color: #4a90e2;
  margin-bottom: 0.5rem;
}

.room-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
}

.room-footer {
  margin-top: auto;
}

@media (max-width: 768px) {
  .rooms-component {
    padding: 2rem 0;
  }

  .room-card {
    margin-bottom: 1rem;
  }
}
```

## ⭐ Reviews Component CSS

```css
.reviews-component {
  padding: 4rem 0;
}

.reviews-component .title {
  color: #4a90e2;
  font-weight: 700;
}

.review-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(74, 144, 226, 0.15);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.stars .icon {
  color: #f39c12;
}

.review-text {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.review-text p {
  margin: 0;
}

@media (max-width: 768px) {
  .reviews-component {
    padding: 2rem 0;
  }

  .review-card {
    margin-bottom: 1rem;
  }
}
```

## 🖼️ Gallery Component CSS

```css
.gallery-component {
  background-color: #ffffff;
  padding: 4rem 0;
}

.gallery-component .title {
  color: #4a90e2;
  font-weight: 700;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(74, 144, 226, 0.2);
}

.gallery-item figure {
  margin: 0;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.modal-image {
  max-width: 90vw;
  max-height: 90vh;
}

.modal-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .gallery-component {
    padding: 2rem 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
}
```

## 📍 Contacts Component CSS

```css
.contacts-component {
  background-color: #ffffff;
  padding: 4rem 0;
}

.contacts-component .title {
  color: #4a90e2;
  font-weight: 700;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-info-container {
  background: linear-gradient(135deg, #f0f4ff 0%, #fff0f4 100%);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.1);
}

.contact-link {
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-word;
}

.contact-link:hover {
  color: #4a90e2;
  text-decoration: underline;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  color: #4a90e2;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(74, 144, 226, 0.2);
  background: #4a90e2;
  color: white;
}

@media (max-width: 768px) {
  .contacts-component {
    padding: 2rem 0;
  }

  .contact-info-container {
    margin-top: 1.5rem;
  }
}
```

## 🦶 Footer Component CSS

```css
.footer-component {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
  margin-top: 4rem;
}

.footer-section {
  padding: 3rem 0 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-block {
  margin-bottom: 2rem;
}

.footer-block .title {
  color: #f39c12;
  margin-bottom: 1rem;
}

.footer-text {
  color: #bdc3c7;
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-menu,
.footer-contacts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li,
.footer-contacts li {
  margin-bottom: 0.5rem;
}

.footer-menu a,
.footer-contacts a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer-menu a:hover,
.footer-contacts a:hover {
  color: #f39c12;
}

.footer-contacts li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-contacts .icon {
  color: #f39c12;
  flex-shrink: 0;
}

.footer-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #bdc3c7;
  transition: all 0.3s ease;
  text-decoration: none;
}

.footer-social:hover {
  background: #f39c12;
  color: white;
  transform: translateY(-3px);
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem 0;
}

.footer-copyright,
.footer-developed {
  color: #bdc3c7;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-section {
    padding: 2rem 0 1rem;
  }

  .footer-block {
    margin-bottom: 1.5rem;
  }

  .footer-copyright,
  .footer-developed {
    text-align: center;
  }
}
```

## 🎨 Кольорова схема Bulma

```css
/* Основні кольори Bulma */
.is-primary { color: #4a90e2; }
.is-info { color: #3298dc; }
.is-success { color: #48c774; }
.is-warning { color: #ffdd57; }
.is-danger { color: #f14668; }

/* Фонові кольори */
.has-background-primary { background-color: #4a90e2; }
.has-background-light { background-color: #f5f5f5; }

/* Текстові ефекти */
.has-text-white { color: #ffffff; }
.has-text-white-ter { color: rgba(255, 255, 255, 0.9); }
.has-text-dark { color: #2c3e50; }
```
