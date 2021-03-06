import contactModule from "../../contactModel"

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
