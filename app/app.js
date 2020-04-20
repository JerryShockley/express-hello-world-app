// Simple Express web server.
//
// @see http://howtonode.org/getting-started-with-express

// Load the express module.
const express = require('express'),
    app = express(),
    port = 80
    host = '192.168.5.89'

// Respond to requests for / with 'Hello World'.
app.get('/', (req, res) => res.send('Hello Jerry!'))

// Listen on port 80 (like a true web server).
app.listen(port, host, () => console.log('Express server started successfully.'))
