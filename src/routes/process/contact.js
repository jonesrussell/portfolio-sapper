const contacts = require('../../contactModel');

export async function post(req, res, next) {
  console.log('contact.js');

  res.setHeader('Content-Type', 'application/json');
  const data = req.body;

  // Do something with the data...
  console.debug('data', data);

  await contacts.insertOne(data);

  return res.end(JSON.stringify({ success: true }));
}
