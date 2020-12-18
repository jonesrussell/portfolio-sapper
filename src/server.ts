require('dotenv').config();

import * as sapper from "@sapper/server"; // eslint-disable-line import/no-unresolved
import compression from "compression";
import express, { Express } from "express";
import sirv from "sirv";
import cors from "cors";

const { PORT, mode, BLOG_URL, BELL_CREEK_URL } = process.env;
const dev = mode === "development";
const main = require.main === module || require.main?.filename.match(/__sapper__\/build\/index.js$/);

const createSapperServer = async (): Promise<Express> => {
	const app: Express = express();

	if (main) {
		app.use(sirv("static", { dev }));
	}

	app.use(cors());
	
	app.use(
		compression({ threshold: 0 }),
		sapper.middleware({
			session: () => ({
				BLOG_URL,
				BELL_CREEK_URL,
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
