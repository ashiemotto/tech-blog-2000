const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comments');
const postRoutes = require('./posts');

router.use('/posts',postRoutes)
router.use('/comments',commentRoutes);
router.use('/users', userRoutes);


module.exports = router;
