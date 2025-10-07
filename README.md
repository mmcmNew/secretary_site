# Secretary - Landing Page

Визуально привлекательная статическая лендинг-страница для приложения "Secretary" - персонального помощника по управлению задачами.

## Технологии

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Custom CSS animations
- **Icons**: Lucide React

## Разработка

### Требования

- Node.js 18 или выше
- npm или yarn

### Локальный запуск

1. **Клонируйте репозиторий**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Установите зависимости**
   ```bash
   npm install
   ```

3. **Запустите в режиме разработки**
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

## Сборка статических файлов

Эта лендинг-страница - **статический сайт**, серверная часть не требуется.

```bash
npx vite build
```

Готовые файлы будут в папке `dist/public/` - их можно разместить на любом веб-хостинге.

## Развертывание

### Вариант 1: Netlify (рекомендуется) 

1. **Подключите репозиторий к Netlify**
   - Зайдите на [netlify.com](https://netlify.com)
   - Нажмите "Add new site" → "Import an existing project"
   - Выберите ваш Git репозиторий

2. **Настройте параметры сборки**
   ```
   Build command: npx vite build
   Publish directory: dist/public
   ```

3. **Deploy!** Сайт автоматически обновится при каждом коммите

### Вариант 2: Vercel

1. **Установите Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Деплой**
   ```bash
   npx vite build
   vercel --prod
   ```

   Или подключите через веб-интерфейс на [vercel.com](https://vercel.com)

### Вариант 3: GitHub Pages

1. **Соберите проект**
   ```bash
   npx vite build
   ```

2. **Загрузите в gh-pages branch**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r dist/public/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages --force
   ```

3. В настройках репозитория включите GitHub Pages для ветки `gh-pages`

### Вариант 4: Обычный хостинг (cPanel, Timeweb и т.д.)

1. **Соберите проект локально**
   ```bash
   npm install
   npx vite build
   ```

2. **Загрузите файлы на хостинг**
   - Откройте папку `dist/public/`
   - Загрузите ВСЕ файлы через FTP в корневую папку сайта (обычно `public_html/` или `www/`)

3. **Готово!** Сайт сразу заработает

### Вариант 5: VPS / Собственный сервер (с Nginx)

1. **Соберите проект**
   ```bash
   npx vite build
   ```

2. **Скопируйте файлы на сервер**
   ```bash
   scp -r dist/public/* user@your-server:/var/www/secretary/
   ```

3. **Настройте Nginx**
   
   Создайте `/etc/nginx/sites-available/secretary`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/secretary;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Кэширование статики
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

   Активируйте:
   ```bash
   sudo ln -s /etc/nginx/sites-available/secretary /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. **Настройте SSL (опционально)**
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

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
