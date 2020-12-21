import posts from './_feed.js'

const lookup = new Map();

posts.forEach((post) => {
  lookup.set(post.title, JSON.stringify(post))
})

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { title } = req.params;

  if (lookup.has(title)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(title));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }

  next();
}
