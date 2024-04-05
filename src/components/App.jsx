import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hasFeedback = good + neutral + bad > 0;

  return (
    <div>
      <h1>Feedback App</h1>
      <FeedbackOptions
        onGood={() => setGood(good + 1)}
        onNeutral={() => setNeutral(neutral + 1)}
        onBad={() => setBad(bad + 1)}
      />
      {hasFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
