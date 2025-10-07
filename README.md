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

## Развертывание на собственном хостинге

### Вариант 1: VPS / Облачный сервер (Ubuntu/Debian)

1. **Подключитесь к серверу по SSH**
   ```bash
   ssh user@your-server-ip
   ```

2. **Установите Node.js и npm**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Клонируйте проект**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   npm install
   ```

4. **Соберите проект**
   ```bash
   npm run build
   ```

5. **Установите PM2 для управления процессом**
   ```bash
   sudo npm install -g pm2
   ```

6. **Запустите приложение**
   ```bash
   pm2 start dist/index.js --name secretary-landing
   pm2 save
   pm2 startup
   ```

7. **Настройте Nginx как reverse proxy**
   
   Создайте файл `/etc/nginx/sites-available/secretary`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Активируйте конфигурацию:
   ```bash
   sudo ln -s /etc/nginx/sites-available/secretary /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Настройте SSL с Let's Encrypt (опционально)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

### Вариант 2: Shared Hosting (cPanel)

1. Соберите проект локально:
   ```bash
   npm run build
   ```

2. Загрузите содержимое папки `dist/` на хостинг через FTP

3. Убедитесь, что на хостинге установлен Node.js (проверьте в cPanel)

4. Создайте файл `.htaccess` для перенаправления:
   ```apache
   RewriteEngine On
   RewriteRule ^$ http://127.0.0.1:5000/ [P,L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ http://127.0.0.1:5000/$1 [P,L]
   ```

5. Запустите приложение через Node.js App в cPanel

### Вариант 3: Docker

1. **Создайте `Dockerfile` в корне проекта**
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci --only=production
   
   COPY . .
   RUN npm run build
   
   EXPOSE 5000
   
   CMD ["node", "dist/index.js"]
   ```

2. **Создайте `docker-compose.yml`**
   ```yaml
   version: '3.8'
   services:
     web:
       build: .
       ports:
         - "5000:5000"
       restart: always
   ```

3. **Соберите и запустите**
   ```bash
   docker-compose up -d
   ```

### Вариант 4: Статический хостинг (если нужен только frontend)

Если backend не требуется, можно развернуть только frontend на:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Загрузите содержимое `dist/client/` в gh-pages branch

## Переменные окружения

Для продакшен-окружения создайте файл `.env`:

```env
NODE_ENV=production
PORT=5000
SESSION_SECRET=your-secret-key-here
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
