const mongoose = require('mongoose');
import dotenv from "dotenv";
import contactModule from '../../models/contact.model';

dotenv.config();

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', (err: any) => {
  console.error('Database connection error:', err)
});

export async function post(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const data = req.body;

  await contactModule.create(data);

  if (contactModule !== null) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true }));
  } else {
    next();
  }
}
