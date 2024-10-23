# step 1
FROM node:18-bullseye AS builder

WORKDIR /build

COPY package.json /build
RUN yarn 

COPY . /build
RUN yarn build

# step 2
FROM node:18-bullseye-slim
WORKDIR /app

COPY --from=builder /build /app

CMD ["yarn", "start"]
