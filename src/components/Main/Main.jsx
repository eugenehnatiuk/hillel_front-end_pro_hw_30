import React from 'react';
import './main.scss';
import Counter from '../Counter/Counter.jsx';

const Main = ({ sectionClass }) => {
  return (
    <section className={sectionClass}>
      <Counter className="main-section__counter-box" initialValue={0} />
    </section>
  );
};

export default Main;
