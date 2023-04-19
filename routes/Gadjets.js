var express = require('express');
const Gadjets_controlers= require('../controllers/Gadjets');
var router = express.Router();
/* GET Gadjets */
router.get('/', Gadjets_controlers.Gadjets_view_all_Page );

/* GET detail costume page */
router.get('/detail', Gadjets_controlers.Gadjets_view_one_Page);

/* GET create costume page */
router.get('/create', Gadjets_controlers.Gadjets_create_Page);

/* GET create update page */
router.get('/update', Gadjets_controlers.Gadjets_update_Page);

/* GET delete costume page */
router.get('/delete', Gadjets_controlers.Gadjets_delete_Page);

module.exports = router;