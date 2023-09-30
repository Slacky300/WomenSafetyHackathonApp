const Router = require("express");
const router = Router();

const { getemergencyCntrl } = require("../controllers/emergencyCntrl");
router.route("/emergencyPressed").post(getemergencyCntrl);
module.exports = router;
