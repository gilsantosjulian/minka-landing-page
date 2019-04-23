const firebase = require('firebase-admin');
const atob = require('atob');
const express = require('express');
const functions = require('firebase-functions');

require('dotenv-safe').config({
  sample: './config/.env.example',
  path: './config/.env',
});

const { getUsers } = require('./routes/getUsers');
const { addUser } = require('./routes/addUser');
const { getMinkaContent } = require('./routes/getMinkaContent');
const { sendEmail } = require('./routes/sendEmail');

const app = express();

firebase.initializeApp({
  credential: firebase.credential.cert(JSON.parse(atob(process.env.SERVICE_ACCOUNT))),
  databaseURL: 'https://minka-web.firebaseio.com'
});

require('./middlewares/')(app);

// Routes
app.get('/users', getUsers);
app.post('/addUser', addUser);
app.get('/minkaContent', getMinkaContent);
app.post('/sendEmail', sendEmail);

exports.actions = functions.https.onRequest(app);