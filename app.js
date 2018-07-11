const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// const {mailer} = require('./public/js/mailer')

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
  
  // console.log(res)

  // console.log(res.body)
  // you can also pass in an object with value and it will be received in the jade file
  res.render('index', {one: 'Welcome', two: 'Enter your message aqui'})
})

app.get('/about', (req, res) => {
  // then in this part we will user render method to tell node that we 
  // want to render the url by this file
  res.render('about', {
    one: 'Manski University',
    two: 'Enroll now!'
  })
})

app.get('/contact', (req, res) => {
  // then in this part we will user render method to tell node that we 
  // want to render the url by this file
  res.render('contact')
})


////////////////////////////////////////////////////////////////////////////////////
app.post('/about/send', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    //enter email and password here
    auth: {
      user: '',
      pass: ''
    }
  });

  let name = req.body.name;
  let email = req.body.email;
  let course = req.body.course;
  let message = req.body.message;


  var mailOptions = {
    from: 'Manski <>',
    to: '',
    subject: 'Website Submission',
    text: `You have a submission with the following details... Name: ${name} Email: ${email} Course: ${course} Message: ${message}`,
    html: `<p>You have a submission with the following details...</p><ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Course: ${course}</li><li>Message: ${message}</li></ul>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      // console.log('Message Sent: ' + info.response);
      console.log('Message Sent: ' + info.response);
      res.redirect('/about')
    }
  });

})




////////////////////////////////////////////////////////////////////////////////////
app.post('/index/send', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      //enter email and password here
      user: '',
      pass: ''
    }
  });

  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message


  var mailOptions = {
    from: 'manski <>',
    to: '',
    subject: 'Website Submission',
    text: `You have a submission with the following details... Name: ${name} Email: ${email}Message: ${message}`,
    html: `<p>You have a submission with the following details...</p><ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Message: ${message}</li></ul>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      // console.log('Message Sent: ' + info.response);
      console.log('Message Sent: ' + info.response);
      res.redirect('/')
    }
  });
  
})


////////////////////////////////////////////////////////////////////////////////////
app.post('/contact/send', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    //enter email and password here
    auth: {
      user: '',
      pass: ''
    }
  });

  let name = req.body.name;
  let email = req.body.email;
  let course = req.body.course;
  let message = req.body.message;


  var mailOptions = {
    from: 'Manski <>',
    to: '',
    subject: 'Website Submission',
    text: `You have a submission with the following details... Name: ${name} Email: ${email} Course: ${course} Message: ${message}`,
    html: `<p>You have a submission with the following details...</p><ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Course: ${course}</li><li>Message: ${message}</li></ul>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      // console.log('Message Sent: ' + info.response);
      console.log('Message Sent: ' + info.response);
      res.redirect('/contact')
    }
  });

})



app.listen(port, ()=>{
  console.log(`server is open on port ${port}`)
})
