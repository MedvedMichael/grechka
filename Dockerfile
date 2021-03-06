FROM node:lts-alpine

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности 
# скопировать оба файла: package.json и package-lock.json
# COPY package*.json ./


# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY . .

RUN npm install -g typescript

RUN npm install --prefix ./server
RUN npm install --prefix ./client
RUN npm run build --prefix ./client



EXPOSE 3001
# CMD [ "npm", "run --prefix ./server start" ]
CMD [ "./start.sh" ]