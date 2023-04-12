var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Gadjets_controller = require('../controllers/Gadjets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Gadjets ROUTES ///
// POST request for creating a Gadjets.
router.post('/Gadjets', Gadjets_controller.Gadjets_create_post);
// DELETE request to delete Gadjets.
router.delete('/Gadjets/:id', Gadjets_controller.Gadjets_delete);
// PUT request to update Gadjets.
router.put('/Gadjets/:id', Gadjets_controller.Gadjets_update_put);
// GET request for one Gadjets.
router.get('/Gadjets/:id', Gadjets_controller.Gadjets_detail);
// GET request for list of all Gadjets items.
router.get('/Gadjets', Gadjets_controller.Gadjets_list);

module.exports = router;