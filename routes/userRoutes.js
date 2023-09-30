const Router = require('express');
const router = Router();
const {userInfo , registerUser, loginUser, verifyemail,profileUpdate} = require('../controllers/userCntrl');
const validateToken = require('../middlewares/validateToken');
router.route('/register').post(registerUser)
router.route('/login').post(loginUser);
router.route('/emailverify/:tokenId').get(verifyemail);
router.route('/get_user_info').get(validateToken, userInfo);
router.route('/update').put(profileUpdate)


module.exports = router;