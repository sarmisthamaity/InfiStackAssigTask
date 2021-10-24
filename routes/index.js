const router = require('express').Router();
const userroute = require('./users.route');
const loginRoute = require('./login.route');
const itemRoute = require('./items.route');
const itemlistRoute = require('./itemlist.route');
const itemdelRoute = require('./itemdel.route');


router.use('/', userroute);
router.use('/', loginRoute);
router.use('/', itemRoute);
router.use('/edit', itemRoute);
router.use('/', itemlistRoute);
router.use('/', itemdelRoute);


module.exports = router;