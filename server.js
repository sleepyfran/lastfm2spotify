/**
 * This is just a dummy Express.js server that serves our compiled application so Heroku
 * doesn't freak out when it sees an "ng serve" command. The build process will be done by
 * TravisCI and automatically call Heroku afterwards to execute this file. This will load
 * the /dist folder and serve it.
 */
const express = require('express');
const path = require('path');

const app = express();

// Serve ths static /dist folder.
app.use(express.static(__dirname + '/dist'));

// Whatever direction we get, just return our web.
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app on the default Heroku port.
app.listen(process.env.PORT || 8080);
