const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comments');
const postRoutes = require()

router.use('/comments',commentRoutes);
router.use('/users', userRoutes);


module.exports = router;
