import dotenv from "dotenv";
import type express from "express"
import contactModule from '../../models/contact.model';
import Bugsnag from "@bugsnag/js";
import mongoose from 'mongoose';

// Set process.env types
declare var process: {
  env: {
    [key: string]: string;
  }
};

// Retrieve the MongoDB URI
dotenv.config();
const { MONGODB_URI } = process.env;

/**
 * Initiate the connection to MongoDB
 */
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

/**
 * Send an error to BugSnag if mongoose can't connect to mongodb
 */
mongoose.connection.on('error', (err: any) => {
  Bugsnag.notify('Database connection error:', err);
});

/**
 * Handler for /contact form
 * 
 * @param req HTTP Request argument
 * @param res HTTP Response argument
 * @param next Callback function
 */
export async function post(req: express.Request, res: express.Response, next: () => void) {
  const data = req.body;

  await contactModule.create(data);

  if (contactModule !== null) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true }));
  } else {
    next();
  }
}
