const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
// import app from'./app.vue'
server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<p>HTML5的内容！Hello</p>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <meta charset="UTF-8">
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
      
    `)
  })
})

server.listen(8080)