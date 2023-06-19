const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// List of columns for Employee schema
let Employee = new Schema({
UserID:{
   type:String,
   require
},
firstName: {
   type: String,
   require
},
lastName: {
   type: String
},

email: {
   type: String
},
phone: {
   type: Number
},
assignedDate:{
   type:Date,default:Date.now
},
password:{
   type:String,
   require
}
},{
collection: 'employees'
});
 
module.exports = mongoose.model('Employee', Employee);