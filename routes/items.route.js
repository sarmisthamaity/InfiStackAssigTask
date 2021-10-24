const router = require('express').Router();
const { itemsController, editItemController } = require('../controller/index');
const Auth = require('../middleware/Authcheck');

router.post('/items', Auth, itemsController.createItem);
router.put('/', Auth, editItemController.editItem);

module.exports = router;