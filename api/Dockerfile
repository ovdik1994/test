FROM node:14-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

ENV PORT 4000

EXPOSE ${PORT}

CMD [ "npm","run", "start" ]