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
function findArgvValue(key, argv) {
  arg = findParameterKey(key, argv)
  if (arg) { // We found our key
   // Split the key-value pair (e.g. 'port=80' => ['port', '80'])
    splitArgs = arg.split('=')
    // Test if a value exists for the key.
    result = (splitArgs.length === 2)  ?  splitArgs[1] : false
  } else { // We didn't find our key
    result = false
 }
  return result
}

// Returns the parameter from 'argv' containing 'key' if
// it exists, otherwise it returns null. Note the parameter
// must be of the form: <key>=<value>.
function findParameterKey(key, argv, startAt=2) {
  largv = argv.slice(startAt) // 1st 2 elements aren't params
  regex = new RegExp(`^${key}=`)
  result = largv.find(element => element.match(regex))
  return result
}

export default findArgvValue
