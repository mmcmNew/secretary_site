# Развертывание приложения Secretary с помощью Docker и Portainer

## Подготовка к развертыванию

1. **Убедитесь, что приложение собрано:**
   ```bash
   npm run build
   ```

2. **Убедитесь, что Docker установлен и запущен на вашем сервере**

## Развертывание через Portainer

### Шаг 1: Загрузка файлов на сервер

Скопируйте следующие файлы на ваш сервер:
- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`
- `nginx.conf`
- Всю папку с собранным приложением

### Шаг 2: Сборка и запуск через Portainer

1. **Откройте Portainer в браузере**
2. **Перейдите в раздел "Stacks"**
3. **Нажмите "Add stack"**
4. **Выберите способ загрузки файлов:**
   - Загрузите `docker-compose.yml` файл
   - Или вставьте содержимое файла в редактор

5. **Настройте параметры (опционально):**
   ```yaml
   version: '3.8'

   services:
     secretary-app:
       build: .
       container_name: secretary-app
       restart: unless-stopped
       ports:
         - "3000:3000"  # Измените порт при необходимости
       environment:
         - NODE_ENV=production
   ```

6. **Нажмите "Deploy the stack"**

### Шаг 3: Проверка развертывания

1. **Проверьте статус контейнеров в Portainer**
2. **Убедитесь, что контейнер `secretary-app` запущен**
3. **Откройте приложение:**
   - HTTP: `http://your-server-ip:3000`
   - Через Nginx (если настроен): `http://your-server-ip`

## Управление через Portainer

### Запуск/остановка контейнера:
- Перейдите в "Containers"
- Найдите `secretary-app`
- Используйте кнопки "Start/Stop/Restart"

### Просмотр логов:
- Выберите контейнер `secretary-app`
- Перейдите во вкладку "Logs"

### Мониторинг ресурсов:
- Вкладка "Stats" покажет использование CPU и памяти

## Настройка Nginx (опционально)

Если хотите использовать Nginx как обратный прокси:

1. **Создайте SSL сертификаты (для HTTPS):**
   ```bash
   # Поместите cert.pem и key.pem в папку ./ssl/
   mkdir ssl
   # Используйте Let's Encrypt или другие сертификаты
   ```

2. **Настройте домен:**
   - Измените `server_name` в `nginx.conf`
   - Раскомментируйте HTTPS секцию при наличии сертификатов

## Настройка Traefik для маршрутизации трафика

Если вы используете Traefik как reverse proxy, добавьте соответствующие лейблы в `docker-compose.yml`:

```yaml
labels:
  # Traefik labels для маршрутизации трафика
  - "traefik.enable=true"
  - "traefik.http.routers.secretary.rule=Host(`your-domain.com`)"
  - "traefik.http.routers.secretary.entrypoints=websecure"
  - "traefik.http.routers.secretary.tls.certresolver=letsencrypt"
  - "traefik.http.services.secretary.loadbalancer.server.port=3000"
  # Лейблы для HTTP (порт 80)
  - "traefik.http.routers.secretary-http.rule=Host(`your-domain.com`)"
  - "traefik.http.routers.secretary-http.entrypoints=web"
  - "traefik.http.routers.secretary-http.middlewares=redirect-to-https"
  # Middleware для перенаправления HTTP на HTTPS
  - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"
  - "traefik.http.middlewares.redirect-to-https.redirectscheme.permanent=true"
```

**Важно:** Замените `your-domain.com` на ваш реальный домен.

## Переменные окружения

Добавьте необходимые переменные в `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
  # Добавьте другие переменные при необходимости
```

## Обновление приложения

1. **Остановите текущие контейнеры в Portainer**
2. **Загрузите обновленные файлы**
3. **Пересоберите образ:**
   ```bash
   docker-compose build --no-cache
   ```
4. **Запустите обновленные контейнеры:**
   ```bash
   docker-compose up -d
   ```

## Диагностика проблем

### Проверка логов:
```bash
docker-compose logs secretary-app
```

### Проверка состояния контейнера:
```bash
docker-compose ps
```

### Проверка портов:
```bash
netstat -tlnp | grep 3000
```

## Безопасность

1. **Используйте сильные пароли для Portainer**
2. **Настройте firewall:**
   ```bash
   ufw allow 80
   ufw allow 443
   ufw allow 9443  # Portainer
   ```

3. **Регулярно обновляйте образы:**
   ```bash
   docker-compose pull
   docker-compose up -d --build
   ```

## Производительность

Для лучшей производительности:
- Используйте Nginx как обратный прокси
- Настройте кэширование статических файлов
- Мониторьте использование ресурсов через Portainer