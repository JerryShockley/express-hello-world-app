// Simple Express web server.
//
// @see http://howtonode.org/getting-started-with-express

// Load the express module.
const express = require('express'),
    app = express(),
    port = fetchArgvValue('port', process.argv) || 8080
    host = fetchArgvValue('host', process.argv) || '127.0.0.1'

console.log(`Express is listening on '${host}:${port}'`)

// Respond to requests for / with 'Hello World'.
app.get('/', (req, res) => res.send('Hello from Node and Express!'))

// Listen on port 8080 (like a true web server).
app.listen(port, host, () => console.log('Express server started successfully.'))

/* Description:  Fetches the value associated with the specified
 *               key of a key-value pair from the command-line
 *               arguments stored in the Argv array.
 * Parameters:
 *  key (string) => The left side of an Argv array command-line
 *                  parameter (e.g. <key>=<value>)
 *  Argv (array) => An array of application information. The
 *                  2nd and greater array members represent
 *                  application parameters in either <key>=<value>
 *                  or unnamed <value> forms. These parameters are
 *                  seperated by spaces.
 *
 *  Returns:  If the key exists and it has a non-empty value, then
 *            that value is returned. Otherwise false is returned.
 */
function fetchArgvValue(key, argv) {
  idx = argv.indexOf(key, 2)  // skip the 1st two elements as they're not args.
  if( idx == -1) {
    result = false // We didn't find the key
  } else {  // We found our key
   // Split the key-value pair (e.g. 'port=80' => ['port', '80'])
    arg = argv[idx].split('=')
    // Test if a value exists for the key.
    result = (arg.length === 2)  ?  arg[1].trim() : false
 }
  return result
}
