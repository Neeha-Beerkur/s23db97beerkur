var express = require('express');
const Gadjets_controlers= require('../controllers/Gadjets');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
   return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
 }

/* GET Gadjets */
router.get('/', Gadjets_controlers.Gadjets_view_all_Page );

/* GET detail Gadjet page */
router.get('/detail', Gadjets_controlers.Gadjets_view_one_Page);

/* GET create Gadjet page */
router.get('/create', Gadjets_controlers.Gadjets_create_Page);

/* GET create update page */
router.get('/update', Gadjets_controlers.Gadjets_update_Page);

/* GET delete Gadjet page */
router.get('/delete', Gadjets_controlers.Gadjets_delete_Page);

/* GET update costume page */
router.get('/update', secured, Gadjets_controlers.Gadjets_update_Page);


module.exports = router;