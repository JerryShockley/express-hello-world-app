// Simple Express web server.
//
// @see http://howtonode.org/getting-started-with-express
// Finds the value associated with a key in the argv array.
const findValue = require('./argv')
 // Load the express module.
const express = require('express'),
      app = express(),
      port = findValue('port', process.argv) || 8080,
      host = findValue('host', process.argv) || '127.0.0.1'

console.log(`Express is listening on '${host}:${port}'`)

// Respond to requests for / with 'Hello World'.
app.get('/', (req, res) => res.send('Hello from Node and Express!'))

app.listen(port, host, () => console.log('Express server started successfully.'))
