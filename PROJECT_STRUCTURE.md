# Смотрицька Вежа - Landing Page

Односторінковий веб-сайт для готелю "Смотрицька Вежа" у Кам'янці-Подільському, розроблений на Angular з використанням Bulma CSS.

## 📋 Структура проекту

```
hotel-landing/
├── src/
│   ├── app/
│   │   ├── header/
│   │   │   ├── header.ts        # Компонент шапки з навігацією
│   │   │   ├── header.html      # HTML шаблон
│   │   │   └── header.css       # Стилі
│   │   ├── hero/
│   │   │   ├── hero.ts          # Головний банер
│   │   │   ├── hero.html
│   │   │   └── hero.css
│   │   ├── about/
│   │   │   ├── about.ts         # Про готель
│   │   │   ├── about.html
│   │   │   └── about.css
│   │   ├── rooms/
│   │   │   ├── rooms.ts         # Каталог номерів
│   │   │   ├── rooms.html
│   │   │   └── rooms.css
│   │   ├── gallery/
│   │   │   ├── gallery.ts       # Галерея фото
│   │   │   ├── gallery.html
│   │   │   └── gallery.css
│   │   ├── reviews/
│   │   │   ├── reviews.ts       # Відгуки гостей
│   │   │   ├── reviews.html
│   │   │   └── reviews.css
│   │   ├── contacts/
│   │   │   ├── contacts.ts      # Контакти та карта
│   │   │   ├── contacts.html
│   │   │   └── contacts.css
│   │   ├── footer/
│   │   │   ├── footer.ts        # Підвал сайту
│   │   │   ├── footer.html
│   │   │   └── footer.css
│   │   ├── data.ts              # Mock дані (номери, відгуки)
│   │   ├── app.ts               # Root компонент
│   │   ├── app.html
│   │   └── app.css
│   ├── styles.css               # Глобальні стилі
│   ├── index.html               # HTML точка входу
│   └── main.ts                  # Angular bootstrap
├── angular.json                 # Angular конфіг
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Використані технології

- **Angular 21+** - фреймворк
- **Bulma CSS** - CSS фреймворк
- **Font Awesome 6.4** - іконки
- **TypeScript** - мова програмування
- **Responsive Design** - мобільна адаптація (Mobile-first)

## 🏗️ Архітектура компонентів

### 1. HeaderComponent (`header/`)
- Фіксована навігаційна шапка
- Логотип готелю
- Меню навігації зі скролом до секцій
- Кнопка "Забронювати"
- Мобільне меню з burger-хлопком
- **Сигнали**: `isMenuOpen()`
- **Методи**: `toggleMenu()`, `closeMenu()`, `scrollToSection()`

### 2. HeroComponent (`hero/`)
- Головний банер з фоновим зображенням
- Назва готелю та опис
- Кнопка "Переглянути номери"
- Кнопка "Зателефонувати"
- Анімація при скролі

### 3. AboutComponent (`about/`)
- Опис готелю
- Зображення готелю
- 4 функціональні карти з іконками:
  - Wi-Fi
  - Парковка
  - Сніданок
  - Вид на місто
- Mock дані в `features` масиві

### 4. RoomsComponent (`rooms/`)
- Каталог 4 типів номерів
- Картки номерів з фото, описом та ціною
- Кнопка "Забронювати" на кожній карті
- **Дані**: імпортуються з `data.ts`

### 5. GalleryComponent (`gallery/`)
- Сітка зображень (6 фото)
- Modal для збільшення фото
- Ефект при наведенні на зображення
- **Методи**: `openImage()`, `closeImage()`

### 6. ReviewsComponent (`reviews/`)
- 4 відгуки гостей
- Рейтинг у вигляді зірочок (★)
- Ім'я та текст відгуку
- **Дані**: імпортуються з `data.ts`
- **Методи**: `getStarArray()` для рендеру зірок

### 7. ContactsComponent (`contacts/`)
- Вбудована Google Map
- 3 способи зв'язку:
  - Адреса
  - Телефон
  - Email
- Соцмережі (Facebook, Instagram, Viber)

### 8. FooterComponent (`footer/`)
- Інформація про готель
- Меню навігації
- Контактна інформація
- Соцмережі
- Копірайт з рівнем року

## 📦 Mock дані (data.ts)

### Interface Room
```typescript
interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
```

**Типи номерів:**
1. Стандартний номер - ₴1500/ніч
2. Напівлюкс - ₴2500/ніч
3. Люкс - ₴4000/ніч
4. Президентський люкс - ₴6000/ніч

### Interface Review
```typescript
interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}
```

**Приклади відгуків:**
- 4 відгуки від гостей з рейтингами 5★ та 4★

## 🎯 Ключові особливості

✅ **Семантична HTML розмітка** - використання `<section>`, `<header>`, `<footer>`
✅ **Mobile-first дизайн** - адаптований під всі пристрої
✅ **Плавний скрол** - `scroll-behavior: smooth`
✅ **Angular компоненти** - кожна секція як окремий компонент
✅ **Реактивні сигнали** - використання Angular signals
✅ **Без сторонніх UI-бібліотек** - тільки Bulma + кастомний CSS
✅ **Анімації** - hover ефекти, переходи
✅ **Font Awesome іконки** - професійні іконки через CDN

## 🚀 Установка та запуск

### Встановлення залежностей
```bash
cd hotel-landing
npm install
```

### Розробка (Development)
```bash
ng serve
```
Перейти на `http://localhost:4200`

### Збірка (Production)
```bash
ng build --configuration production
```

### Запуск тестів
```bash
ng test
```

## 🎨 Кольорова схема

- **Первинний**: #4a90e2 (синій)
- **Акцент**: #f39c12 (золотистий)
- **Темний текст**: #2c3e50
- **Світлий текст**: #ecf0f1

## 📱 Адаптивність

- **Desktop**: Full layout з 3-колонною сіткою
- **Tablet**: 2-колонна сітка, зменшені елементи
- **Mobile**: 1-колонна сітка, мобільне меню

## 🔧 Налаштування

### Зміна контактної інформації
Відредагувати `src/app/contacts/contacts.ts`:
```typescript
contactInfo = [
  { icon: '...', title: '...', value: '...', link: '...' }
]
```

### Додавання нових номерів
Додати в `src/app/data.ts`:
```typescript
export const ROOMS: Room[] = [
  // ...ваші номери
]
```

### Додавання нових відгуків
Додати в `src/app/data.ts`:
```typescript
export const REVIEWS: Review[] = [
  // ...ваші відгуки
]
```

## 📄 Ліцензія

© 2024 Смотрицька Вежа. Всі права захищені.
