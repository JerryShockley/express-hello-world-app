# express-hello-world-app
Simple hello world express app used by Ansible script that provisions Nodejs

#### Usage
Default host is '127.0.0.1' and default port is '8080'. You may change these values using
command-line arguments as specified below.

`
forever start app/app.js [host=<value> port=<value>]
`

If you use [JerryShockley/deploy-node-postgresql](https://github.com/JerryShockley/deploy-node-postgresql) to set up an environment to run this app, then you will connect at
http://192.168.5.89:8080
