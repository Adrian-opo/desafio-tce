FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN rm -rf node_modules

EXPOSE 3002

CMD node dist/main


