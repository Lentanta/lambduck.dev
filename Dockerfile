FROM node:18-bullseye

WORKDIR /app

COPY package.json /app
RUN yarn 

COPY . /app
RUN yarn build

FROM node:18-bullseye-slim
WORKDIR /app

CMD ["yarn", "start"]
