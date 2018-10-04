const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./app/controllers/auth')(app);
require('./app/controllers/chall')(app);
require('./app/controllers/dashboard')(app);

app.listen(7000, () => {
})
