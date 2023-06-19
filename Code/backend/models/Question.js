// models/Question.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  answers: [
    {
      text: {
        type: String,
        required: true,
      },
      nextQuestionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
    },
  ],
});

module.exports = mongoose.model('Question', questionSchema);
