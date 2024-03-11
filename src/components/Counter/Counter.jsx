import React, { useState, useEffect } from 'react';
import './counter.scss';

const Counter = ({ sectionClass, initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const [isNegative, setIsNegative] = useState(false);

  useEffect(() => {
    setIsNegative(count < 0);
  }, [count]);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialValue);

  return (
    <div className={sectionClass}>
      <p className="main-section__title">Simple Counter on React</p>
      <div className="main-section__counter">
        <button className="main-section__decrement" onClick={decrement}>
          -
        </button>
        <span
          className={
            isNegative ? 'main-section__count--zero' : ' main-section__count'
          }
        >
          {count}
        </span>
        <button className="main-section__increment" onClick={increment}>
          +
        </button>
      </div>
      <button className="main-section__reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};


export default Counter;
