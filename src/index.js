const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(cors({'allowedHeaders':['Content-Type', 'Authorization'],'credentials':true}));
=======
app.use(cors());
>>>>>>> c80a4d1cad9220d7c2ab28cf2b2bee2ca9dc2742

require('./app/controllers/auth')(app);
require('./app/controllers/chall')(app);

<<<<<<< HEAD
app.listen(7000, (error) => {
})
=======
app.listen(7000, () => {
})
>>>>>>> c80a4d1cad9220d7c2ab28cf2b2bee2ca9dc2742
