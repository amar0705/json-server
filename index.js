const JSONserver = require("json-server")
const server = JSONserver.create()
const router = JSONserver.router("db.json")

const middlewares = JSONserver.defaults()
const port = process.env.PORT || 3300

server.use(middlewares)
server.use(router)
server.listen(port)