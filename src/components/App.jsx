import React from 'react';
import Statistics from './Statistics';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Statistics good={10} neutral={5} bad={3} />
    </div>
  );
};
