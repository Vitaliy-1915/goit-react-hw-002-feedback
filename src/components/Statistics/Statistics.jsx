import React from 'react';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul>
      <li> good: {good}</li>
      <li> neutral: {neutral}</li>
      <li> bad: {bad}</li>
      <li>total: {total}</li>
      <li>positivePercentage: {positivePercentage}</li>
    </ul>
  );
}

export default Statistics;
