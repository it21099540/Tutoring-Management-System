// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Question() {
  const [question, setQuestion] = useState(null);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [nextQuestionId, setNextQuestionId] = useState(null);

  useEffect(() => {
    axios.get('/questions/60b8fb4825c16f3ef5f0b5a8').then(res => setQuestion(res.data));
  }, []);

  useEffect(() => {
    if (answerIndex !== null) {
      axios.post('/answers', { questionId: question._id, answerIndex }).then(res => setNextQuestionId(res.data));
    }
  }, [answerIndex]);

  const handleAnswer = index => {
    setAnswerIndex(index);
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  if (nextQuestionId) {
    return <Question />;
  }

  return (
    <div>
      <h1>{question.text}</h1>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(index)}>{answer.text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
