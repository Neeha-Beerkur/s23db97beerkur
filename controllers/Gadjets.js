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
exports.Gadjets_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Gadjets.findById( req.params.id)
 // Do updates of properties
 if(req.body.Gadjets_type)
 toUpdate.Gadjet_type = req.body.Gadjet_type;
 if(req.body.Gadjet_Name) toUpdate.Gadjet_Name = req.body.Gadjet_Name;
 if(req.body.Gadjet_Price) toUpdate.Gadjet_Price = req.body.Gadjet_Price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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

// for a specific Costume.
exports.Gadjets_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Gadjets.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };