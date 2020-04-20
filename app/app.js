// Simple Express web server.
//
// @see http://howtonode.org/getting-started-with-express

// Load the express module.
const express = require('express'),
    app = express(),
    port = 8080

// Respond to requests for / with 'Hello World'.
app.get('/', (req, res) => res.send('Hello Jerry!'))

// Listen on port 80 (like a true web server).
app.listen(port, () => console.log('Express server started successfully.'))
