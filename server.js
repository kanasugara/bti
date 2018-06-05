const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));


app.use(express.static(path.join(__dirname + '/dist')));

// API
const api = require('./server/api');
app.use('/api', api);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
