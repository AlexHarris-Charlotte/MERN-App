const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


// routes
const authRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/index');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authRoutes);
app.use(indexRoutes);


app.listen(port, () => console.log(`Listening on port ${port}`));
