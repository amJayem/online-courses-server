const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseDetails = require('./data/course-details.json');

app.get('/', (req, res) => {
  res.send('Server is running')
});

app.get('/course-details', (req, res)=>{
    res.send(courseDetails);
})

app.get('/course-details/:id', (req, res)=>{
    const id = req.params.id;
    const courseById = courseDetails.find(course => course.id == id);
    res.send(courseById);
})

app.listen(port, ()=>{
    console.log('Sever running on port: ', port);
});