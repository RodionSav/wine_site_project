# Базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальной проект
COPY . .

# Открываем порт
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"]
