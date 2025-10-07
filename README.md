# Secretary - Landing Page

Визуально привлекательная лендинг-страница для приложения "Secretary" - персонального помощника по управлению задачами.

## Технологии

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Express.js
- **Animations**: Custom CSS animations
- **Icons**: Lucide React

## Установка и запуск

### Требования

- Node.js 18 или выше
- npm или yarn

### Шаги для запуска

1. **Клонируйте репозиторий**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Установите зависимости**
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки**
   ```bash
   npm run dev
   ```

4. **Откройте в браузере**
   
   Приложение будет доступно по адресу: `http://localhost:5000`

## Структура проекта

```
├── client/              # Frontend приложение
│   ├── src/
│   │   ├── components/  # React компоненты
│   │   ├── pages/       # Страницы
│   │   └── lib/         # Утилиты
│   └── index.html
├── server/              # Backend сервер
│   ├── routes.ts        # API маршруты
│   └── index.ts         # Точка входа сервера
├── shared/              # Общие типы и схемы
└── attached_assets/     # Изображения и ресурсы
```

## Замена скриншотов

Скриншоты приложения находятся в файле `client/src/components/FeaturesSection.tsx`.

Для замены изображений:

1. Поместите новые изображения в папку `attached_assets/`
2. Обновите импорты в `FeaturesSection.tsx`:

```typescript
import screenshot1 from "@assets/your-image-1.png";
import screenshot2 from "@assets/your-image-2.png";
import screenshot3 from "@assets/your-image-3.png";
import screenshot4 from "@assets/your-image-4.png";
```

## Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `dist/`.

## Кастомизация дизайна

Цветовая схема и стили настраиваются в:
- `client/src/index.css` - CSS переменные и цвета
- `tailwind.config.ts` - конфигурация Tailwind
- `design_guidelines.md` - руководство по дизайну

## Разработка

Проект использует:
- Hot Module Replacement (HMR) для быстрой разработки
- TypeScript для типобезопасности
- ESLint для линтинга кода
- Prettier для форматирования (опционально)

## Лицензия

Все права защищены.
