FROM node:14-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

ENV PORT 4000

EXPOSE ${PORT}

CMD [ "npm","run", "start" ]