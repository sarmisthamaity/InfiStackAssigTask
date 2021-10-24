const router = require('express').Router();
const {itemlistController} = require('../controller/index');
const Auth = require('../middleware/Authcheck');

router.get('/itemlist', Auth, itemlistController.itemList);

module.exports = router;