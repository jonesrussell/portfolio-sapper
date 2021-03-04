import contactModule from "../../contactModel"

export async function post(req, res, next) {
  console.log('contact.js');

  res.setHeader('Content-Type', 'application/json');
  console.debug('req.body', req.body);
  const data = req.body;

  // Do something with the data...
  console.debug('data', data);

  await contactModule.default.insertOne(data);

  return res.end(JSON.stringify({ success: true }));
}
