const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
let port = 3000

// this is to tell node that this we are setting views
// as the folder that we will use to reding html files
app.set('views', path.join(__dirname, 'views'));

// this is also to tell node that the view files will
// be rendered in jade format
app.set('view engine', 'jade')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// this will tell node that this path is the public folder
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res)=>{
  // then in this part we will user render method to tell node that we 
  // want to render the url by this file
  res.render('index')
})

app.get('/layout', (req, res) => {
  // then in this part we will user render method to tell node that we 
  // want to render the url by this file
  res.render('layout')
})

app.listen(port, ()=>{
  console.log(`server is open on port ${port}`)
})