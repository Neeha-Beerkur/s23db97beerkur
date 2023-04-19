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

// Handle Gadjets delete on DELETE.
exports.Gadjets_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Gadjets.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Gadjets update form on PUT.
exports.Gadjets_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Gadjets.findById( req.params.id)
 // Do updates of properties
 if(req.body.Gadjets_Type)
 toUpdate.Gadjets_Type = req.body.Gadjets_Type;
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

// Handle a show one view with id specified by query
exports.Gadjets_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Gadjets.findById( req.query.id)
    res.render('Gadjetsdetail',
   { title: 'Gadjets Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
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

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Gadjets_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Gadjetscreate', { title: 'Gadjets Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.Gadjets_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Gadjets.findById(req.query.id)
    res.render('Gadjetsupdate', { title: 'Gadjets Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
  };

  // Handle a delete one view with id from query
exports.Gadjets_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Gadjets.findById(req.query.id)
    res.render('Gadjetsdelete', { title: 'Gadjets Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };