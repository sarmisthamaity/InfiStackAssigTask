const router = require('express').Router();
const { itemsController, editItemController } = require('../controller/index');
const Auth = require('../common/Authcheck');


router.post('/items', itemsController.createItem);
router.put('/', Auth, editItemController.editItem);


module.exports = router;