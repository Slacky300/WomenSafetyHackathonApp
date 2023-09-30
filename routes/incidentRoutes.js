const Router = require('express');
const router = Router();
const upload = require('../middlewares/upload')
const {addIncident} = require('../controllers/incidentCntrl');

router.route('/').post(upload.single('note'),addIncident);


module.exports = router