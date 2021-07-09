const router = require('express').Router();


// get signup page
router.get('/', (req, res) => {
if (req.session.logged_in){
  res.redirect('/api/users/homepage')
return
}
res.render('signup')
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
