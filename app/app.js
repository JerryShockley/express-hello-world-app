// Simple Express web server.
//
// @see http://howtonode.org/getting-started-with-express

// Load the express module.
const express = require('express'),
    app = express(),
    port = parseArgv('port', process.argv) || 8080
    host = parseArgv('host', process.argv) || '127.0.0.1'

console.log(`Express is listening on '${host}:${port}'`)

// Respond to requests for / with 'Hello World'.
app.get('/', (req, res) => res.send('Hello from Node and Express!'))

// Listen on port 8080 (like a true web server).
app.listen(port, host, () => console.log('Express server started successfully.'))

// Simple command line arg parser that
// searches for a specified key where
// the form of the CLI argument is key=value.
// The function returns the value associated
// with the key.
function parseArgv(key, argv) {
  idx = argv.indexOf(key, 2)
  if( idx == -1) {
    result = false // We didn't find the key
  } else {  // We found our key
    result = argv[idx].split('=').trim() // extract key value
  }
  return result
}
