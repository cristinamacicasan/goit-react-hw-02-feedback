import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.statisticsContainer}>
      <h2>Statistics</h2>
      <p className={styles.statisticItem}>Good: {good}</p>
      <p className={styles.statisticItem}>Neutral: {neutral}</p>
      <p className={styles.statisticItem}>Bad: {bad}</p>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.positivePercentage}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
