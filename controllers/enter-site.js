const router = require('express').Router();

////////////////////////////////////////GET/////////////////////////////////////////////

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/api/users/home');
    return;
  }
  res.render('login')
});

/////////////////////////////

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/api/users/home');
    return;
  }
  res.render('signup')
});



module.exports = router;