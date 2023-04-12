var Gadjets = require('../models/Gadjets');
// List of all Gadjets
exports.Gadjets_list = async function(req, res) {
    try{
        theGadjets = await Gadjets.find();
        res.send(theGadjets);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    
};
// for a specific Gadjet.
exports.Gadjets_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Gadjets detail: ' + req.params.id);
};
// Handle Gadjets create on POST.
exports.Gadjets_create_post = async function(req, res) {
console.log(req.body)
let document = new Gadjets();
document.Gadjet_Type = req.body.Gadjet_Type;
 document.Gadjet_Price = req.body.Gadjet_Price;
 document.Gadjet_Name = req.body.Gadjet_Name;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};

// Handle Gadjets delete form on DELETE.
exports.Gadjets_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Gadjets delete DELETE ' + req.params.id);
};
// Handle Gadjets update form on PUT.
exports.Gadjets_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Gadjets update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Gadjets_view_all_Page = async function(req, res) {
    try{
    theGadjets = await Gadjets.find();
    res.render('Gadjets', { title: 'Gadjets Search Results', results: theGadjets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};