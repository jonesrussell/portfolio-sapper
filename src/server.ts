import * as sapper from "@sapper/server"; // eslint-disable-line import/no-unresolved
import compression from "compression";
import express, { Express } from "express";
import sirv from "sirv";
import cors from "cors";
import dotenv from "dotenv";

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

dotenv.config();

const {
  PORT, mode, BLOG_URL, BELL_CREEK_URL, MONGODB_URI
} = process.env;
const dev = mode === "development";
const main = require.main === module || require.main?.filename.match(/__sapper__\/build\/index.js$/);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', (err: any) => {
  console.error('Database connection error:', err)
});

const createSapperServer = async (): Promise<Express> => {
  const app: Express = express();

  if (main) {
    app.use(sirv("static", { dev }));
  }

  app.use(cors());

  app.use(bodyParser.json());

  app.use(
    compression({ threshold: 0 }),
    sapper.middleware({
      session: () => ({
        BLOG_URL,
        BELL_CREEK_URL,
        MONGODB_URI
      }),
    }),
  );

  return app;
};

if (main) {
  createSapperServer().then((app) => {
		app.listen(PORT, (err?: any): void => { // eslint-disable-line
      if (err) console.log("error", err);
    });
  });
}

export { createSapperServer };

// For more Cloud Functions, write and export them here
// and import and set them up in `/index.js`
