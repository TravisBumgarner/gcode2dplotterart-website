FROM node:20-alpine3.17 AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "8080", "-s", "."]