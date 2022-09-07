const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routers');

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.disable('x-powered-by');

app.set('port', process.env.PORT || 4000);
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

router.use('/sign-in', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'sign-in.html'));
});

router.use('/sign-up', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'sign-up.html'));
});

router.use('/feed', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'feed.html'));
});

router.use('/profile', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', 'profile.html'));
});

app.use((req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', '404.html'));
});

app.use((err, req, res, next) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', '500.html'));
});

module.exports = { app };
