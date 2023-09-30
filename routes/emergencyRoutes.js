const Router = require("express");
const router = Router();
const validateToken = require('../middlewares/validateToken');
const { sendemergencyCntrl,getAllEmergencies,getSinglEmergency } = require("../controllers/emergencyCntrl");

router.route("/emergencyPressed").post(validateToken,sendemergencyCntrl);
router.route('/').get(validateToken,getAllEmergencies)
router.route('/:id').get(validateToken,getSinglEmergency)
module.exports = router;
