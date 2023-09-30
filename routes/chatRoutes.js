const Router = require("express");
const router = Router();
const {addChats,getChats} = require('../controllers/chatCntrl')

router.route('/').post(addChats);
router.route('/:id/emergncye/:emerg').get(getChats);


module.exports = router;