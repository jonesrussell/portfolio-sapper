import contactModule from "../../contactModel"

export async function post(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const data = req.body;

  await contactModule.create(data);
  //await contactModule.insertMany(data);

  return res.end(JSON.stringify({ success: true }));
}
