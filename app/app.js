// Simple Express web server.
//
// @see http://howtonode.org/getting-started-with-express
// Finds the value associated with a key in the argv array.
const findArgvValue = require('./argv')
 // Load the express module.
const express = require('express'),
    app = express(),
    port = findArgvValue('port', process.argv) || 8080
    host = findArgvValue('host', process.argv) || '127.0.0.1'

console.log(`Express is listening on '${host}:${port}'`)

// Respond to requests for / with 'Hello World'.
app.get('/', (req, res) => res.send('Hello from Node and Express!'))

// Listen on port 8080 (like a true web server).
app.listen(port, host, () => console.log('Express server started successfully.'))
