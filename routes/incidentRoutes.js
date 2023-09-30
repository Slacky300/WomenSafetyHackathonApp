const Router = require('express');
const router = Router();

const {addIncident} = require('../controllers/incidentCntrl');

router.route('/register').post(addIncident);


module.exports = router