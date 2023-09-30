const Router = require('express');
const router = Router();
const validateToken = require('../middlewares/validateToken');
const upload = require('../middlewares/upload')
const {addIncident,getAllIncidents} = require('../controllers/incidentCntrl');

router.route('/').post(upload.single('note'),addIncident).get(getAllIncidents);



module.exports = router