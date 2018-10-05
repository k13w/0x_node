const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({'allowedHeaders':['Content-Type', 'Authorization'],'credentials':true}));

require('./app/controllers/auth')(app);
require('./app/controllers/chall')(app);

app.listen(7000, (error) => {
})
