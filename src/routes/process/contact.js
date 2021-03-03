const mongo = require("mongodb");

let client = null;
let db = null;

export async function init() {
  if (!client) {
    client = await mongo.MongoClient.connect("mongodb://mongodb.jonesrussell42.xyz");
    db = client.db("portfolio-contact");
  }
  return { client, db }
}

export async function post(req, res, next) {
  console.log('contact.js');

  res.setHeader('Content-Type', 'application/json');
  const data = req.body;

  // Do something with the data...
  console.debug('data', data);

  return res.end(JSON.stringify({ success: true }));
}
