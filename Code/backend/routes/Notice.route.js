// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const noticeRoute = express.Router();

// notice module which is required and imported
let noticeModel = require('../models/Notice');

// To Get List Of notices
noticeRoute.route('/').get(function (req, res) {
noticeModel.find(function (err, note) {
if (err) {
console.log(err);
}
else {
res.json(note);
}
});
});

// To Add New notices
noticeRoute.route('/addNotice').post(function (req, res) {
let note = new noticeModel(req.body);
note.save()
.then(game => {
res.status(200).json({ 'notice': 'notice Added Successfully' });
})
.catch(err => {
res.status(400).send("Something Went Wrong");
});
});

// To Get notices Details By notices ID
noticeRoute.route('/editNotice/:id').get(function (req, res) {
let id = req.params.id;
noticeModel.findById(id, function (err, note) {
res.json(note);
});
});

// To Update The notice Details
noticeRoute.route('/updateNotice/:id').post(function (req, res) {
noticeModel.findById(req.params.id, function (err, note) {
if (!note)
return next(new Error('Unable To Find notice With This Id'));
else {
note.Notice= req.body.Notice;
note.Date=req.body.Date;



note.save().then(nt => {
res.json('notice Updated Successfully');
})
.catch(err => {
res.status(400).send("Unable To Update notice");
});
}
});
});

// To Delete The notice
noticeRoute.route('/deleteNotice/:id').delete(async(req, res)=>{
    let id = req.params.id;
     await noticeModel.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).send({status: "deleted"  });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "error with deleting data" });
    })


    
})
module.exports = noticeRoute;