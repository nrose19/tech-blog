const router = require('express').Router();
const dashboardRoutes = require('./api/dashboardRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const userRoutes = require('./api/userRoutes');
const homepageRoutes = require('./api/homepageRoutes');

router.use('/User', userRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/homepage', homepageRoutes);


module.exports = router;