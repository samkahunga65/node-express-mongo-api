const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


require('dotenv/config');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//import Router
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
//routes
app.get('/', (req, res) => {
    res.send('we are on home');
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!'));
//how to listen to the server
app.listen(3000)