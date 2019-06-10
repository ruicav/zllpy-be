FROM node:10.16.0-jessie

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN node_modules/.bin/sequelize db:migrate
RUN node_modules/.bin/sequelize db:seed:all

EXPOSE 3000

CMD [ "npm", "start" ]