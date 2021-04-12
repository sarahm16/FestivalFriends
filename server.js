// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 5000;
// const favicon = require('express-favicon');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(favicon(__dirname + '/build/favicon.ico'));

// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

// app.listen(port, () => console.log(`Listening on port ${port}`));


const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
var compression = require('compression');

const app = express();
app.use(compression());

const expressStaticGzip = require('express-static-gzip');

app.use(favicon(__dirname + '/client/build/favicon.ico'));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'client/build')));

// const buildPath = path.join(__dirname, '..', 'client/build');
// app.use(
//   '/',
//   expressStaticGzip(buildPath, {
//     enableBrotli: true,
//     orderPreference: ['br', 'gz']
//   })
// );

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}`));