const router = require('express').Router();
const {deleteItemController} = require('../controller/index');
const Auth = require('../middleware/Authcheck');

router.delete('/itemremove',Auth, deleteItemController.delItem);

module.exports = router;