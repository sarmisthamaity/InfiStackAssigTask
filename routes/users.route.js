const router = require('express').Router();
const {userController} = require('../controller/index');
const upload = require('../middleware/uplo');

router.post('/signup', upload.any(), userController.userSignUp);

module.exports = router;