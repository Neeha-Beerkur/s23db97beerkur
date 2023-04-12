var express = require('express');
const Gadjets_controlers= require('../controllers/Gadjets');
var router = express.Router();
/* GET costumes */
router.get('/', Gadjets_controlers.Gadjets_view_all_Page );

module.exports = router;