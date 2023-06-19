// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const timetableRoute = express.Router();

// timetable module which is required and imported
let timetableModel = require('../models/Timetable');

// To Get List Of timetables
timetableRoute.route('/').get(function (req, res) {
timetableModel.find(function (err, schedule) {
if (err) {
console.log(err);
}
else {
res.json(schedule);
}
});
});

// To Add New timetable
timetableRoute.route('/addTimetable').post(function (req, res) {
let schedule = new timetableModel(req.body);
schedule.save()
.then(game => {
res.status(200).json({ 'schedule': 'Timetable Added Successfully' });
})
.catch(err => {
res.status(400).send("Something Went Wrong");
});
});

// To Get timetable Details By timetable ID
timetableRoute.route('/editTimetable/:id').get(function (req, res) {
let id = req.params.id;
timetableModel.findById(id, function (err, schedule) {
res.json(schedule);
});
});

// To Update The timetable Details
timetableRoute.route('/updateTimetable/:id').post(function (req, res) {
timetableModel.findById(req.params.id, function (err, schedule) {
if (!schedule)
return next(new Error('Unable To Find timetable With This Id'));
else {
schedule.TeacherName= req.body.TeacherName;
schedule.Subject=req.body.Subject;
schedule.Day=req.body.Day;
schedule.TimeStart = req.body.TimeStart;
schedule.TimeEnd=req.body.TimeEnd;


schedule.save().then(tt => {
res.json('Timetable Updated Successfully');
})
.catch(err => {
res.status(400).send("Unable To Update timetable");
});
}
});
});

// To Delete The Timetable
timetableRoute.route('/deleteTimetable/:id').delete(async(req, res)=>{
    let id = req.params.id;

    
    
        await timetableModel.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).send({status: "deleted"  });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status: "error with deleting data" });
    })


    
})
module.exports = timetableRoute;