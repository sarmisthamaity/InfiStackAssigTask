const router = require('express').Router();
const {userController} = require('../controller/index');

router.post('/signup', userController.userSignUp);

module.exports = router;