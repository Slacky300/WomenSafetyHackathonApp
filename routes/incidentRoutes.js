const Router = require('express');
const router = Router();

const {addIncident} = require('../controllers/incidentCntrl');

router.route('/').post(addIncident);


module.exports = router