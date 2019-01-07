const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { buildUrls, MAIN_ENDPOINT } = require('./utils/routes');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const routes = {
  // '/examples/basic/': { example: 'basic', title: 'Basic Example.' },
  // '/examples/refreshable/': { example: 'refreshable', title: 'Refreshable ads.' },
  ...buildUrls('Examples'),
  ...buildUrls('AdSlot'),
  ...buildUrls('DFPSlotsProvider'),
  ...buildUrls('DFPManager'),
};

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      console.log('****', pathname, query, routes[pathname]);
      app.render(req, res, MAIN_ENDPOINT, routes[pathname]);
    })
      .listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
  })
