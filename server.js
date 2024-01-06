const http = require("http");
const { parse } = require("url");
const next = require("next");

const hostname = "local.yoriquiz.site"
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, hostname });
const handle = app.getRequestHandler();

const PORT = 442;

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });


  const https = require("https");
  const fs = require("fs");
  const options = {
    key: fs.readFileSync("local.yoriquiz.site-key.pem"),
    cert: fs.readFileSync("local.yoriquiz.site.pem"),
  };
  https
    .createServer(options, function (req, res) {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT + 1, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${PORT + 1}`);
    });
});
