FROM node:14-buster AS build

LABEL name portfolio-sapper
LABEL version 1.0.2

WORKDIR /app

COPY . .

RUN npm install
RUN npm run sapper:export

FROM node:14-alpine

COPY --from=build /app /app

WORKDIR /app

#RUN npm install && npm run sapper:export

CMD ["npm", "start:export"]

#FROM nginx:1.19.2-alpine
#COPY --from=build /app/__sapper__/build /usr/share/nginx/html
#COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
