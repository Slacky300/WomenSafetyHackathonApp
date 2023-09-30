const Router = require("express");
const router = Router();
const {addChats,getChats} = require('../controllers/chatCntrl')
const validateToken = require('../middlewares/validateToken');

router.route('/').post(validateToken, addChats);
router.route('/:id/emergncye/:emerg').get(validateToken, getChats);


module.exports = router;