FROM node:14-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm ci

RUN npm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 3000

CMD [ "npm", "run", "start" ]