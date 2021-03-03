const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: String,
  message: String,
});

const entry = mongoose.model('Contact', contactSchema);

export async function post(req, res, next) {
  console.log('contact.js');

  res.setHeader('Content-Type', 'application/json');
  const data = req.body;

  // Do something with the data...
  console.debug('data', data);

  entry.save(data);

  return res.end(JSON.stringify({ success: true }));
}
