const Router = require("express");
const router = Router();
const validateToken = require('../middlewares/validateToken');
const { sendemergencyCntrl,getAllEmergencies,getSinglEmergency } = require("../controllers/emergencyCntrl");

router.route("/emergencyPressed").post(sendemergencyCntrl);
router.route('/').get(getAllEmergencies)
router.route('/:id').get(getSinglEmergency)
module.exports = router;
