<div align="center">

# 🏠 БО МБФ «Дім Добрих Справ»

**Офіційний сайт благодійного волонтерського фонду**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-2ea44f?logo=github)](https://dimdsprav.pp.ua)
[![HTML](https://img.shields.io/badge/HTML5-single--file-E34F26?logo=html5&logoColor=white)](index.html)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-CDN-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[🌐 dimdsprav.pp.ua](https://dimdsprav.pp.ua)

</div>

---

## Про проєкт

БО МБФ «Дім Добрих Справ» — офіційно зареєстрований неприбутковий благодійний фонд. Допомагаємо дітям, літнім людям, захисникам України та сім'ям у скрутному становищі.

Цей репозиторій містить статичний лендінг фонду, що хоститься безкоштовно на **GitHub Pages** з підключеним власним доменом.

---

## Особливості сайту

- **Одна HTML сторінка** — без фреймворків, без збірки, без залежностей
- **Адаптивний дизайн** — коректно відображається на мобільних, планшетах та десктопах
- **Галерея з 162 фотографіями** — розкривається за кліком з лайтбоксом та клавіатурною навігацією
- **Відео-секція** зі scroll-анімацією появи
- **Двомовність** — перемикання UA / EN
- **Захист контактів** від ботів — email і телефон збираються з фрагментів через JS, не присутні в HTML
- **Content Security Policy** — захист від XSS
- **Open Graph теги** — красиві превʼю у соцмережах
- **SEO-оптимізовано** — meta теги, canonical URL, alt-атрибути

---

## Стек

| Технологія | Використання |
|---|---|
| HTML5 | Розмітка, вся структура сторінки |
| [Tailwind CSS](https://tailwindcss.com) (CDN) | Стилізація |
| Vanilla JavaScript | Анімації, галерея, лайтбокс, i18n |
| Google Fonts | Cormorant Garamond + Nunito |
| GitHub Pages | Безкоштовний хостинг |

---

## Структура проєкту

```
dim-dobryx-sprav/
├── index.html          # Вся сторінка (HTML + CSS + JS)
├── CNAME               # Власний домен для GitHub Pages
├── media/
│   ├── gallery/        # 162 фотографії з акцій фонду
│   └── *.mp4           # Відео для секції на сторінці
└── docs/
    ├── Statut.pdf      # Статут фонду
    ├── Vipiska.pdf     # Виписка
    ├── Vityag.pdf      # Витяг
    └── schet.jpg       # Банківські реквізити
```

---

## Розгортання

Сайт автоматично публікується через **GitHub Pages** при кожному пуші в гілку `main`.

Для локального перегляду достатньо відкрити `index.html` у браузері — жодного сервера не потрібно.

```bash
# Клонувати репозиторій
git clone https://github.com/musicofmelodymagnet-creator/dim-dobryx-sprav.git

# Відкрити сайт
start index.html
```

---

## Контакти фонду

- 🌐 [dimdsprav.pp.ua](https://dimdsprav.pp.ua)
- 📧 dimdobrixsprav@ukr.net

---

<div align="center">

Зроблено з ❤️ для допомоги людям

</div>
