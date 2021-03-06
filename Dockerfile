FROM node:14-buster AS build

LABEL name portfolio-sapper

WORKDIR /app

COPY . .

RUN npm install
RUN npm run sapper:build

FROM node:14-alpine

COPY --from=build /app /app

WORKDIR /app

CMD ["npm", "run", "start"]

EXPOSE 3000
