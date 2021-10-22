const router = require('express').Router();
const userroute = require('../routes/users.route');
const loginRoute = require('../routes/login.route');
const itemRoute = require('../routes/items.route');


router.use('/', userroute);
router.use('/', loginRoute);
router.use('/', itemRoute);
router.use('/edit', itemRoute);


module.exports = router;