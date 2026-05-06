# 🗂️ QUICK REFERENCE - Швидкий довідник

## 📍 Де знаходяться найважливіші файли?

### 🎯 Для розробників

**Основні компоненти:**
- `src/app/header/header.ts` - Навігація (мобільне меню)
- `src/app/rooms/rooms.ts` - Каталог номерів
- `src/app/reviews/reviews.ts` - Відгуки з рейтингом
- `src/app/gallery/gallery.ts` - Галерея фото
- `src/app/data.ts` - **Mock-дані (rooms, reviews)**

**Стилі:**
- `src/styles.css` - Глобальні стилі + Bulma
- `src/app/header/header.css` - Стилі навігації
- `src/app/rooms/rooms.css` - Стилі номерів
- `src/app/reviews/reviews.css` - Стилі відгуків

**Конфігурація:**
- `angular.json` - Конфіг Angular
- `package.json` - Залежності
- `tsconfig.json` - TypeScript конфіг

---

## 🚀 КОМАНДИ ДЛЯ РОБОТИ

### Запуск
```bash
# Встановити залежності (зробити один раз)
npm install

# Запустити розробницький сервер
ng serve
# або
npm start

# Відкрити http://localhost:4200
```

### Розробка
```bash
# Створити новий компонент
ng generate component my-component

# Запустити тести
ng test

# Лінтинг коду
ng lint
```

### Продакшен
```bash
# Збудувати для продакшену
ng build --configuration production

# Файли будуть у папці dist/hotel-landing/

# Запустити оптимізовану версію
ng serve --configuration production
```

---

## 📝 ОСНОВНІ ФАЙЛИ ДЛЯ РЕДАГУВАННЯ

### 1️⃣ Додавання нового номера
**Файл:** `src/app/data.ts`
```typescript
export const ROOMS: Room[] = [
  // ... існуючі номери

  // Додати новий:
  {
    id: 5,
    name: 'Новий номер',
    description: 'Опис номера',
    price: 3500,
    image: 'https://...'
  }
];
```

### 2️⃣ Додавання нового відгуку
**Файл:** `src/app/data.ts`
```typescript
export const REVIEWS: Review[] = [
  // ... існуючі відгуки

  // Додати новий:
  {
    id: 5,
    name: 'Ім\'я Людини',
    rating: 5,
    text: 'Текст відгуку тут...'
  }
];
```

### 3️⃣ Зміна контактної інформації
**Файл:** `src/app/contacts/contacts.ts`
```typescript
contactInfo = [
  {
    icon: 'fas fa-phone',
    title: 'Телефон',
    value: '+38 (XXXXX)',
    link: 'tel:+38XXXXX'
  },
  // ... інші контакти
];
```

### 4️⃣ Зміна кольорів
**Файл:** `src/styles.css`
```css
:root {
  --primary-color: #ваш-колір;      /* Синій */
  --accent-color: #ваш-колір;       /* Жовтий */
  --text-dark: #ваш-колір;          /* Темний текст */
  --text-light: #ваш-колір;         /* Світлий текст */
}
```

### 5️⃣ Додавання логотипу
**Файл:** `src/app/header/header.html`
```html
<img src="путь/до/логотипа.png" alt="Logo" style="height: 40px;">
```

---

## 🔍 СТРУКТУРА КОМПОНЕНТІВ

Кожен компонент містить 3 файли:

### ❌ Неправильно (лишай тільки ці):
```
component/
├── component.spec.ts     ← Видалити (тести)
├── component.ts          ✅ ПОТРІБНА
├── component.html        ✅ ПОТРІБНА
└── component.css         ✅ ПОТРІБНА
```

### ✅ Правильно:
```
component/
├── component.ts
├── component.html
└── component.css
```

---

## 📊 АРХІТЕКТУРА

### App Root (`app.ts`)
```
App (root)
├── HeaderComponent
├── HeroComponent
├── AboutComponent
├── RoomsComponent
├── GalleryComponent
├── ReviewsComponent
├── ContactsComponent
└── FooterComponent
```

### Потік даних
```
data.ts (Mock)
    ↓
rooms.ts  ←  ROOMS (масив)
reviews.ts ← REVIEWS (масив)
about.ts   ← features (масив)
```

---

## 🎨 КОЛЬОРОВА СХЕМА

```
#4a90e2  ← Основний колір (синій)
#f39c12  ← Акцент (золото)
#2c3e50  ← Темний текст
#ecf0f1  ← Світлий текст
#f8f9fa  ← Фон
```

### Використання Bulma
```html
<!-- Синій текст -->
<h1 class="has-text-primary">Заголовок</h1>

<!-- Синя кнопка -->
<button class="button is-primary">Кнопка</button>

<!-- Світлий фон -->
<div class="has-background-light">Вміст</div>
```

---

## 🛠️ ПОШИРЕНІ ЗАВДАННЯ

### ❓ Як змінити назву готелю?
```html
<!-- Файл: src/app/header/header.html -->
<!-- Змініть цей текст: -->
<span class="title is-5" style="color: #4a90e2;">
  Смотрицька Вежа  ← ЗМІНІТЬ ТУТУТ
</span>
```

### ❓ Як додати нове фото до галереї?
```typescript
// Файл: src/app/gallery/gallery.ts
images = [
  // ... існуючі фото
  { 
    url: 'https://новий-url.jpg', 
    alt: 'Опис фото' 
  }
];
```

### ❓ Як змінити ціну номера?
```typescript
// Файл: src/app/data.ts
{
  id: 1,
  name: 'Стандартний номер',
  price: 2000,  ← ЗМІНІТЬ ЦІНУ
  // ... інше
}
```

### ❓ Як додати нову функцію (Wi-Fi, Басейн)?
```typescript
// Файл: src/app/about/about.ts
features = [
  // ... існуючі
  {
    icon: 'fas fa-swimming-pool',  // Icon з Font Awesome
    title: 'Басейн',
    description: 'Гарячий басейн з видом'
  }
];
```

### ❓ Як змінити соціальні мережі?
```html
<!-- Файл: src/app/footer/footer.html -->
<a href="https://facebook.com/ваш-профіль" class="footer-social">
  <i class="fab fa-facebook"></i>
</a>
```

---

## 📚 ДОКУМЕНТАЦІЯ

| Файл | Для кого | Зміст |
|------|---------|--------|
| **FINAL_SUMMARY.md** | Керівники | Огляд проекту |
| **PROJECT_STRUCTURE.md** | Розробники | Архітектура компонентів |
| **COMPONENTS_CODE.md** | Розробники | Повний код всіх компонентів |
| **CSS_STYLING.md** | Дизайнери | Стилі та анімації |
| **LANDING_PAGE_README.md** | Усі | Керівництво користувача |
| **QUICK_REFERENCE.md** | Усі | Цей файл (быстрый старт) |

---

## 🔗 ВАЖЛИВІ ПОСИЛАННЯ

### 📖 Офіційна документація
- [Angular Docs](https://angular.dev)
- [Bulma CSS](https://bulma.io)
- [Font Awesome](https://fontawesome.com)
- [TypeScript](https://www.typescriptlang.org)

### 🎨 Інструменти
- [Visual Studio Code](https://code.visualstudio.com)
- [Angular DevTools](https://angular.dev/tools/devtools)
- [Bulma Extensions](https://wikiki.github.io/bulma-extensions/)

### 🌐 Хостинги
- [Netlify](https://www.netlify.com/) - Безплатно
- [GitHub Pages](https://pages.github.com/) - Безплатно
- [Heroku](https://www.heroku.com/) - Платно
- [AWS](https://aws.amazon.com/) - Платно

---

## 🆘 ПРОБЛЕМИ ТА РІШЕННЯ

### ❌ Помилка: "ng: command not found"
```bash
# Встановити Angular CLI
npm install -g @angular/cli
```

### ❌ Помилка: "Port 4200 уже використовується"
```bash
# Запустити на іншому порту
ng serve --port 4300
```

### ❌ Помилка: "Cannot find module 'bulma'"
```bash
# Встановити Bulma
npm install bulma
```

### ❌ Компоненти не завантажуються
```bash
# Очистити кеш
rm -rf node_modules dist
npm install
ng serve
```

---

## ✅ ПЕРЕВІРКОВИЙ СПИСОК ПЕРЕД ДЕПЛОЄМ

- [ ] Всі компоненти відображаються корректно
- [ ] Мобільне меню працює на телефоні
- [ ] Посилання на фото рівні
- [ ] Контакти оновлені
- [ ] Сайт швидко завантажується
- [ ] Немає помилок в браузері (F12 → Console)
- [ ] Всі кнопки "Забронювати" працюють
- [ ] Фото завантажуються без затримок
- [ ] Плавний скрол працює
- [ ] Соцмережи мають правильні посилання

---

## 🚀 ГОТОВО!

Сайт повністю готовий до роботи.

**Для запуску:**
```bash
cd hotel-landing
npm install
ng serve
```

**Потім відкрийте:** http://localhost:4200 ✨

---

*Питання? Дивіться файли документації.*  
*Помилка? Перевірте консоль (F12 → Console)*  
*Все добре? Розгортайте на хостинг! 🎉*
