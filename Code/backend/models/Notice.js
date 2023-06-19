const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Notice = new Schema({

    Notice :{
        type : String,
        required : true 
    },

    Date : {
        type : String,
        required : true
    }

    
},{
    collection: 'notices'
    });

   

    module.exports = mongoose.model('Notice', Notice);