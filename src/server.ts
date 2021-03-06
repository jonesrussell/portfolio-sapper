import * as sapper from "@sapper/server";
import compression from "compression";
import express, { Express } from "express";
import sirv from "sirv";
import cors from "cors";
import dotenv from "dotenv";

import { json } from 'body-parser';

dotenv.config();

const {
  PORT, mode, BLOG_URL, BELL_CREEK_URL, MONGODB_URI
} = process.env;

const dev = mode === "development";

const main = require.main === module || require.main?.filename.match(/__sapper__\/build\/index.js$/);

const createSapperServer = async (): Promise<Express> => {
  const app: Express = express();

  if (main) {
    app.use(sirv("static", { dev }));
  }

  app.use(cors());

  app.use(json());

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
		app.listen(PORT, (err?: any): void => {
      if (err) console.log("error", err);
    });
  });
}

export { createSapperServer };

// For more Cloud Functions, write and export them here
// and import and set them up in `/index.js`
