const router = require('express').Router();

// get login page

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/api/users/home');
    return;
  }
  res.render('login')
});

//get signup

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/api/users/home');
    return;
  }
  res.render('signup')
});



module.exports = router;