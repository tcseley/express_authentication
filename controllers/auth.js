const express = require('express');
const router = express.Router();
const passport = require('./config/ppConfig'); //this might be problematic

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

module.exports = router;
