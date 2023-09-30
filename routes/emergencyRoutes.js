const Router = require("express");
const router = Router();


const { sendemergencyCntrl } = require("../controllers/emergencyCntrl");
router.route("/emergencyPressed").post(sendemergencyCntrl);
module.exports = router;
