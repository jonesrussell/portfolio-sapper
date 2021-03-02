export async function post(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  const data = req.body
  // Do something with the data...
  console.debug(data)

  return res.end(JSON.stringify({ success: true }))
}
