FROM node:14-buster AS build

LABEL name portfolio-sapper
LABEL version 1.0.3

WORKDIR /app

COPY . .

RUN npm install
RUN npm run sapper:export

FROM node:14-alpine

COPY --from=build /app /app

WORKDIR /app

CMD ["npm", "run", "start:export"]

EXPOSE 5000
