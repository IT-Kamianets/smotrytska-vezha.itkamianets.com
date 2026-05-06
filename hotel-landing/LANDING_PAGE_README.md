# 🏨 Смотрицька Вежа - Landing Page

**Професійний односторінковий веб-сайт для готелю "Смотрицька Вежа" в Кам'янці-Подільському**

![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular)
![Bulma](https://img.shields.io/badge/Bulma-CSS-00d1b2)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Особливості

- ✅ **Семантична HTML5** - правильна структура розмітки
- ✅ **Mobile-first дизайн** - адаптивний під усі пристрої
- ✅ **Angular компоненти** - модульна архітектура
- ✅ **Bulma CSS** - сучасний CSS фреймворк без Bootstrap
- ✅ **Плавна навігація** - скрол до секцій без перезавантаження
- ✅ **Професійні анімації** - hover ефекти та переходи
- ✅ **Швидкодія** - оптимізований для всіх браузерів
- ✅ **SEO-дружелюбний** - правильні теги та мета-дані

## 🎯 Структура проекту

```
hotel-landing/
├── src/
│   ├── app/
│   │   ├── header/          # Навігаційна шапка
│   │   ├── hero/            # Головний банер
│   │   ├── about/           # Про готель
│   │   ├── rooms/           # Каталог номерів (4 типи)
│   │   ├── gallery/         # Галерея фото (6+ фото)
│   │   ├── reviews/         # Відгуки гостей (4 відгуки)
│   │   ├── contacts/        # Контакти та Google Map
│   │   ├── footer/          # Підвал сайту
│   │   ├── data.ts          # Mock дані (rooms, reviews)
│   │   └── app.ts           # Root компонент
│   ├── index.html           # HTML точка входу
│   └── styles.css           # Глобальні стилі
├── angular.json             # Angular конфіг
├── package.json
├── tsconfig.json
└── PROJECT_STRUCTURE.md     # Детальна документація

```

## 🚀 Швидкий старт

### 1️⃣ Встановлення

```bash
# Клонувати або перейти в директорію проекту
cd hotel-landing

# Встановити залежності
npm install
```

### 2️⃣ Розробка

```bash
# Запустити dev сервер
ng serve

# Перейти на http://localhost:4200
```

### 3️⃣ Збірка для продакшену

```bash
# Збірка в режимі production
ng build --configuration production

# Готові файли у dist/hotel-landing/
```

## 📱 Розділи сайту

### 1. **Header (Навігація)**
- Фіксована шапка з логотипом
- Меню навігації з гладким скролом
- Мобільне меню (burger menu)
- Кнопка "Забронювати"

### 2. **Hero (Головний банер)**
- Велике фонове зображення готелю
- Анімований заголовок
- Описова підпис
- 2 кнопки (Переглянути номери, Зателефонувати)

### 3. **About (Про готель)**
- Описовий текст про готель
- Фото готелю з анімацією
- 4 функціональні карти з іконками:
  - 🌐 Wi-Fi (безплатний швидкий інтернет)
  - 🅿️ Парковка (безплатна для гостей)
  - 🍽️ Сніданок (кожного ранку)
  - 🏙️ Вид на місто (панорамний вид)

### 4. **Rooms (Номери)**
- 4 типи номерів:
  - **Стандартний** - ₴1,500/ніч
  - **Напівлюкс** - ₴2,500/ніч
  - **Люкс** - ₴4,000/ніч
  - **Президентський** - ₴6,000/ніч
- Картки з фото, описом, ціною
- Кнопка "Забронювати" на кожній карті

### 5. **Gallery (Галерея)**
- Сітка 6+ фото готелю
- Modal для збільшення фото
- Ефект при наведенні

### 6. **Reviews (Відгуки)**
- 4 реальні відгуки гостей
- Рейтинги (★★★★★)
- Аватари з ініціалами

### 7. **Contacts (Контакти)**
- Вбудована Google Map
- Адреса: вул. Острозького, 1, Кам'янець-Подільський
- Телефон: +38 (03849) 42-500
- Email: info@smotrytska-vezha.com
- Соцмережи (Facebook, Instagram, Viber)

### 8. **Footer (Підвал)**
- Інформація про готель
- Навігаційне меню
- Контактна інформація
- Соцмережи
- Копірайт

## 🛠️ Технічний стек

| Технологія | Версія | Призначення |
|-----------|--------|-----------|
| Angular | 21+ | Фреймворк |
| TypeScript | 5.2+ | Мова програмування |
| Bulma | 1.0+ | CSS фреймворк |
| Font Awesome | 6.4+ | Іконки (CDN) |
| Node.js | 20+ | Runtime |
| npm | 11+ | Package manager |

## 📝 Компоненти Angular

### HeaderComponent
```typescript
// Управління меню мобільного пристрою
isMenuOpen = signal(false);
toggleMenu() { }
scrollToSection(sectionId: string) { }
```

### RoomsComponent
```typescript
// Динамічний список номерів з mock-даних
rooms = ROOMS; // массив об'єктів Room
```

### ReviewsComponent
```typescript
// Рендеринг відгуків з рейтингом
reviews = REVIEWS;
getStarArray(rating: number): number[] { }
```

### GalleryComponent
```typescript
// Открытие модального вікна для фото
openImage(image: any) { }
closeImage() { }
```

### ContactsComponent
```typescript
// Статичні контактні дані
contactInfo: Array<{ icon, title, value, link }>
```

### FooterComponent
```typescript
// Динамічне меню та рік
currentYear = new Date().getFullYear();
menuItems = [...]
```

## 🎨 Дизайн та UX

### Кольорова схема
- **Первинний**: `#4a90e2` (синій)
- **Акцент**: `#f39c12` (золотистий)
- **Текст**: `#2c3e50` (темносірий)
- **Фон**: `#f8f9fa` (світло-сірий)

### Адаптивність
- **Desktop** (> 1024px): Full layout
- **Tablet** (768px - 1024px): 2-колонна сітка
- **Mobile** (< 768px): 1-колонна сітка

### Анімації
- 🎬 Zoom при наведенні (Hero background)
- ⬆️ Bounce на кнопці скролу
- 📉 Scale та translateY на картках
- 💫 Fade і slideUp при завантаженні

## 📊 Mock-дані

### Номери готелю (4 типи)
```typescript
ROOMS: Room[] = [
  {
    id: 1,
    name: 'Стандартний номер',
    description: '...',
    price: 1500,
    image: 'url...'
  },
  // ... ще 3 типи
]
```

### Відгуки (4 гостей)
```typescript
REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Марія К.',
    rating: 5,
    text: '...'
  },
  // ... ще 3 відгуки
]
```

## 🔧 Налаштування

### Зміна контактних даних
Редагувати `src/app/contacts/contacts.ts`:
```typescript
contactInfo = [
  { 
    icon: 'fas fa-phone',
    title: 'Телефон',
    value: '+38 (03849) 42-500',
    link: 'tel:+380384942500'
  },
  // ...
]
```

### Додавання нових номерів
Додати в `src/app/data.ts`:
```typescript
{
  id: 5,
  name: 'Новий номер',
  description: '...',
  price: 3000,
  image: 'url...'
}
```

### Зміна кольорів
Оновити в `src/styles.css`:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-color;
  --text-dark: #your-color;
}
```

## 📱 SEO та Meta-теги

```html
<title>Смотрицька Вежа - Готель у Кам'янці-Подільському</title>
<meta name="description" 
      content="Затишний готель з видом на каньйон...">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## 🧪 Тестування

```bash
# Запустити unit тести
ng test

# Запустити e2e тести
ng e2e

# Build з production оптимізаціями
ng build --configuration production --optimization
```

## 📦 Розгортування

### На GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --configuration production --base-href="/hotel-landing/"
ngh --dir=dist/hotel-landing
```

### На Netlify
```bash
npm run build
# Завантажити dist/ папку на Netlify
```

### На вебсервер
```bash
ng build --configuration production
# Завантажити файли з dist/ на хостинг
```

## 🐛 Debugging

```bash
# Dev сервер з source maps
ng serve --source-map

# Production build з source maps
ng build --source-map --configuration production
```

## 📚 Документація

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Детальна структура
- [COMPONENTS_CODE.md](./COMPONENTS_CODE.md) - Код компонентів
- [CSS_STYLING.md](./CSS_STYLING.md) - CSS стилі

## 🤝 Contributing

Якщо ви хочете поліпшити сайт:

1. Fork проекту
2. Створіть гілку для вашої функції (`git checkout -b feature/AmazingFeature`)
3. Commit змін (`git commit -m 'Add some AmazingFeature'`)
4. Push в гілку (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

Цей проект ліцензований під MIT License. Дивіться файл [LICENSE](LICENSE) для деталей.

## ✉️ Контакти

**Смотрицька Вежа**
- 📞 Телефон: +38 (03849) 42-500
- 📧 Email: info@smotrytska-vezha.com
- 📍 Адреса: вул. Острозького, 1, Кам'янець-Подільський, 32000

---

**Розроблено з ❤️ для готелю Смотрицька Вежа**

Бажаєте дізнатися більше про готель? Відвідайте [офіційний сайт](https://smotrytska-vezha.itkamianets.com)
