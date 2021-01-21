FROM node:14-buster AS build
COPY . /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx:1.19.2-alpine
COPY --from=build /app/__sapper__/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf

LABEL name portfolio-sapper
LABEL version 1.0.0

EXPOSE 80
