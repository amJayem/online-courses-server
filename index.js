const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseDetails = require('./data/course-details.json');

app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(port, ()=>{
    console.log('Sever running on port: ', port);
});