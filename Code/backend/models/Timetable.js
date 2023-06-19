const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// List of columns for timetable schema
let Timetable = new Schema({
TeacherName:{
    type:String,
    
},
Subject:{
    type:String
},
Day:{
    type:String
},
TimeStart:{
    type:String
},
TimeEnd:{
    type:String
}
},{
collection: 'timetables'
});
 
module.exports = mongoose.model('Timetable', Timetable);